import PSQLDataSource from './psql-data-source';
import DataLoader from 'dataloader';

export default class BimObjectLangDataSource extends PSQLDataSource {
    async getBimObjectLangs(bimObjectId, languageCode) {
        if (bimObjectId) {
            return (await this.getBimObjectLangsDataLoader().load(bimObjectId))?.name ?? '';
        }
    }

    getBimObjectLangsDataLoader() {
        if (!this.getNameDataLoader) {
            this.getNameDataLoader = this.createGetBimObjectLangsDataLoader();
        }

        return this.getNameDataLoader;
    }

    createGetBimObjectLangsDataLoader() {
        return new DataLoader(
            async bimObjectIds => {
                const results = await this.knexConnection
                    .from('bimobject_langs')
                    .whereIn('bimobject_langs.bimobject_id', bimObjectIds)
                    .andWhere('bimobject_langs.language_code', 'fr')
                    .select('name', 'bimobject_id')
                    ;

                return bimObjectIds.map(id => results.find(result => result.bimobject_id === id))
            }, { cache: false }
        )
    }
}