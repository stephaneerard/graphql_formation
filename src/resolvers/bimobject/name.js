export default async (parent, args, context, info) => {
    return context.dataSources.pgBimObjectLangName.getBimObjectLangs(parent.id, context.lang)
};
