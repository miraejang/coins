import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ContentTitle = styled.h3`
  margin-bottom: 1rem;
  text-align: center;
`;

const OHLCV = gql`
  query OHLCV($ohlcvId: String!) {
    ohlcv(id: $ohlcvId) {
      time_open
      time_close
      open
      high
      low
      close
      volume
      market_cap
    }
  }
`;

const Chart = () => {
  const { coin_id } = useParams();
  const { data } = useQuery(OHLCV, { variables: { ohlcvId: coin_id } });

  return (
    <>
      {data?.ohlcv && (
        <>
          <ContentTitle>A three-week closing price</ContentTitle>
          <ResponsiveContainer width="100%" height="auto" aspect={4 / 1}>
            <AreaChart
              data={data.ohlcv}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
              <XAxis
                dataKey="time_open"
                tickFormatter={tick => {
                  const date = new Date(tick * 1000);
                  return date.getDate();
                }}
              />
              <YAxis
                type="number"
                domain={([dataMin, dataMax]) => {
                  const dataRange = dataMax - dataMin;
                  const x = dataRange / 6;
                  const graphRange = dataRange + x * 2;
                  let gap = 0;

                  if (dataMax > 2) {
                    const unit = `${parseInt(dataRange / 6)}`.length;
                    const pow = Math.pow(10, unit - 1);
                    gap = Math.round(Math.round((dataRange + x * 2) / 4) / pow) * pow;
                  } else {
                    const getFixedNum = x => {
                      let i = 0;
                      while (Number(x.toFixed(Number(i))) === 0) {
                        i++;
                      }
                      return Number(i);
                    };
                    const fixedNum = getFixedNum(graphRange / 4);
                    gap = (graphRange / 4).toFixed(fixedNum);
                  }
                  const min = Math.round((dataMin - x) / gap) * gap;
                  const max = Math.round((dataMax + x) / gap) * gap;

                  return [min, max];
                }}
                tickFormatter={tick => (tick >= 1000 ? tick.toLocaleString('en-IN', { maximumFractionDigits: 5 }) : parseFloat(tick).toFixed(5))}
              />
              <Tooltip />
              <Legend />
              <Area name="close price" type="monotone" dataKey="close" stroke="#1565d5" strokeWidth={3} fill="#1565d5" fillOpacity={0.3} />
            </AreaChart>
          </ResponsiveContainer>
        </>
      )}
    </>
  );
};

export default Chart;
