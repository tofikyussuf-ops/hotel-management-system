import { eachDayOfInterval, format, isSameDay, subDays } from 'date-fns';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { useDarkMode } from '../../context/DarkModeContext';

function SalesChart({ bookings, numDays }) {
  const { isDarkMode } = useDarkMode();

  // 1. Generate the date range based on the filter
  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: new Date(),
  });

  // 2. Map the actual Supabase data to the chart intervals
  const data = allDates.map((date) => {
    return {
      label: format(date, 'MMM dd'),
      totalSales:
        bookings
          ?.filter((booking) => isSameDay(date, new Date(booking.created_at)))
          .reduce((acc, cur) => acc + cur.totalPrice, 0) ?? 0,
      extrasSales:
        bookings
          ?.filter((booking) => isSameDay(date, new Date(booking.created_at)))
          .reduce((acc, cur) => acc + cur.extrasPrice, 0) ?? 0,
    };
  });

  // 3. Dynamic colors controlled by our DarkMode hook
  const colors = isDarkMode
    ? {
        totalSales: { stroke: '#4f46e5', fill: '#4f46e5' },
        extrasSales: { stroke: '#22c55e', fill: '#22c55e' },
        text: '#e5e7eb',
        background: '#18212f',
      }
    : {
        totalSales: { stroke: '#4f46e5', fill: '#c7d2fe' },
        extrasSales: { stroke: '#16a34a', fill: '#dcfce7' },
        text: '#374151',
        background: '#fff',
      };

  return (
    <div className="flex flex-col gap-6 rounded-md border border-[var(--color-grey-100)] bg-[var(--color-grey-0)] p-8 shadow-sm lg:col-span-full">
      <h2 className="text-2xl font-semibold text-[var(--color-grey-700)]">
        Sales from {format(allDates.at(0), 'MMM dd yyyy')} &mdash;{' '}
        {format(allDates.at(-1), 'MMM dd yyyy')}
      </h2>

      <ResponsiveContainer height={300} width="100%">
        <AreaChart data={data}>
          <XAxis
            dataKey="label"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <YAxis
            unit="$"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <CartesianGrid strokeDasharray="4" stroke="var(--color-grey-300)" />
          <Tooltip
            contentStyle={{ backgroundColor: colors.background }}
            itemStyle={{ color: colors.text }}
          />
          <Area
            dataKey="totalSales"
            type="monotone"
            stroke={colors.totalSales.stroke}
            fill={colors.totalSales.fill}
            strokeWidth={2}
            name="Total sales"
            unit="$"
          />
          <Area
            dataKey="extrasSales"
            type="monotone"
            stroke={colors.extrasSales.stroke}
            fill={colors.extrasSales.fill}
            strokeWidth={2}
            name="Extras sales"
            unit="$"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesChart;
