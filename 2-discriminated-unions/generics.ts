type Widget = { type: string; settings: {} };

let chartWidget: Widget;

type ChartQuery = { queryType: "ChartQuery" };
type NumberQuery = { queryType: "NumberQuery" };
type Query = ChartQuery | NumberQuery;

// -------------------[ Attempt 1 ]-------------------- //

interface WidgetStrategy1 {
  getQuery(widget: Widget): Query;
}

const ChartStrategy1: WidgetStrategy1 = {
  getQuery(widget): ChartQuery {
    return { queryType: "ChartQuery" };
  },
};

const chartQuery1 = ChartStrategy1.getQuery(chartWidget!);

// -------------------[ Attempt 2 ]-------------------- //

interface WidgetStrategy2<QueryType extends Query> {
  getQuery(widget: Widget): QueryType;
}

const ChartStrategy2: WidgetStrategy2<ChartQuery> = {
  getQuery(widget): ChartQuery {
    return { queryType: "ChartQuery" };
  },
};

const chartQuery2 = ChartStrategy2.getQuery(chartWidget!);
