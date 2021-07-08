import PSQLDataSource from './psql-data-source';
import DataLoader from 'dataloader';

export default class BimObjectModelDataSource extends PSQLDataSource {
    getModelsDataLoadersBy = null;

    async getBimObjectModels(bimObjectId) {
        if (bimObjectId) {
            const result = await this.getBimObjectModelsDataLoader().load(bimObjectId);
            if (result) {
                return result.map(r => { return { ...r, software: { name: r.softwarename } } })
            }
        }
    }

    getBimObjectModelsDataLoader() {
        if (!this.getModelsDataLoadersBy) {
            this.getModelsDataLoadersBy = this.createGetBimObjectModelsDataLoader();
        }

        return this.getModelsDataLoadersBy;
    }

    createGetBimObjectModelsDataLoader() {
        return new DataLoader(
            async bimObjectModelsIds => {
                const results = await this.knexConnection
                    .from('bimobject_models')
                    .join('softwares', 'bimobject_models.software_id', 'softwares.id')
                    .whereIn('bimobject_models.bimobject_id', bimObjectModelsIds)
                    .select('bimobject_models.name', 'bimobject_models.bimobject_id', 'softwares.name as softwarename')
                    ;

                return bimObjectModelsIds.map(id => results.filter(result => result.bimobject_id === id))
            }, { cache: false }
        )
    }
}