// import { PrismaClient } from '@prisma/client';
// import { NextResponse } from 'next/server';

// const prisma = new PrismaClient();

// export async function GET() {
//   const now = new Date();
//   const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
//   const startOfYear = new Date(now.getFullYear(), 0, 1);

//   const [monthlyEarnings, yearlyEarnings, activeOrdersValue, completedOrders] = await Promise.all([
//     // Monthly earnings (completed orders)
//     prisma.order.aggregate({
//       where: {
//         status: 'COMPLETED',
//         createdAt: {
//           gte: startOfMonth,
//         },
//       },
//       _sum: {
//         amount: true,
//       },
//     }),

//     // Yearly earnings (completed orders)
//     prisma.order.aggregate({
//       where: {
//         status: 'COMPLETED',
//         createdAt: {
//           gte: startOfYear,
//         },
//       },
//       _sum: {
//         amount: true,
//       },
//     }),

//     // Active orders value
//     prisma.order.aggregate({
//       where: {
//         status: 'ACTIVE',
//       },
//       _sum: {
//         amount: true,
//       },
//     }),

//     // Completed orders count
//     prisma.order.count({
//       where: {
//         status: 'COMPLETED',
//       },
//     }),
//   ]);

//   return NextResponse.json({
//     monthlyEarnings: monthlyEarnings._sum.amount || 0,
//     yearlyEarnings: yearlyEarnings._sum.amount || 0,
//     activeOrdersValue: activeOrdersValue._sum.amount || 0,
//     completedOrders,
//   });
// }
