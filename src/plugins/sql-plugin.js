import sqlCollector from "./sql-collector";

export default {
    requestDidStart() {
        return {
            willSendResponse(requestContext) {
                const sqlExtension = {
                    executionTime: sqlCollector.executionTime,
                    numberOfQueries: sqlCollector.queries.length,
                    queries: sqlCollector.queries
                };

                requestContext.response.extensions = { ...requestContext.response.extensions, sqlExtension };

                sqlCollector.reset();
            }
        }
    }
}