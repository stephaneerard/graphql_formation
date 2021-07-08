import PSQLDataSource from './psql-data-source';

export default class BimObjectDataSource extends PSQLDataSource {
    async getBimObjects() {
        return this.knexConnection
            .from('bimobjects')
            .limit(15)
            .select('id')
            ;
    }
}