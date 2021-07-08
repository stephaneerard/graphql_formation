import db from './../config/db';
import BimObjectDataSource from './bimObjectDataSource';
import BimObjectLangDataSource from './bimObjectLangDataSource';
import BimObjectModelDataSource from './bimObjectModelDataSource';

export default {
    pgBimObject: new BimObjectDataSource(db),
    pgBimObjectLangName: new BimObjectLangDataSource(db),
    pgBimObjectModels: new BimObjectModelDataSource(db)
}