import db from './../config/db';
import BimObjectDataSource from './bimObjectDataSource';
import BimObjectLangDataSource from './bimObjectLangDataSource';

export default {
    pgBimObject: new BimObjectDataSource(db),
    pgBimObjectLangName: new BimObjectLangDataSource(db)
}