import db from './../../config/db';

export default async (_, { filter: BimObjectFilter }, context) => {
    return context.dataSources.pgBimObject.getBimObjects()
}
