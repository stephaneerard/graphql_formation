export default async (parent, args, context, info) => {
    return context.dataSources.pgBimObjectModels.getBimObjectModels(parent.id)
};
