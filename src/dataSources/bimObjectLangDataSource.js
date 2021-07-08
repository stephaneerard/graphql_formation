import PSQLDataSource from './psql-data-source';
import DataLoader from 'dataloader';

export default class BimObjectLangDataSource extends PSQLDataSource {
    getNameDataLoadersByLang = [];

    async getBimObjectLangs(bimObjectId, languageCode) {
        if (bimObjectId) {
            return (await this.getBimObjectLangsDataLoader(languageCode).load(bimObjectId))?.name ?? '';
        }
    }

    getBimObjectLangsDataLoader(languageCode) {
        if (!this.getNameDataLoadersByLang[languageCode]) {
            this.getNameDataLoadersByLang[languageCode] = this.createGetBimObjectLangsDataLoader(languageCode);
        }

        return this.getNameDataLoadersByLang[languageCode];
    }

    createGetBimObjectLangsDataLoader(languageCode) {
        return new DataLoader(
            async bimObjectIds => {
                const results = await this.knexConnection
                    .from('bimobject_langs')
                    .whereIn('bimobject_langs.bimobject_id', bimObjectIds)
                    .andWhere('bimobject_langs.language_code', languageCode)
                    .select('name', 'bimobject_id')
                    ;

                return bimObjectIds.map(id => results.find(result => result.bimobject_id === id))
            }, { cache: false }
        )
    }
}