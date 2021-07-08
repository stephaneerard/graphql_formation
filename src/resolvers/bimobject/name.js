import db from './../../config/db';

export default async (parent, args, context, info) => {
    return context.dataSources.pgBimObjectLangName.getBimObjectLangs(parent.id, context.lang)
};
