import { DataSource } from "apollo-datasource";

export default class PSQLDatabase extends DataSource {
    constructor(knexConnection = (data) => data) {
        super();

        this.knexConnection = knexConnection;
    }
}