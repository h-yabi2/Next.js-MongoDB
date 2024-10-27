import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/utils/database";
import { TaskModel } from "@/models/task";

export const GET = async (_: NextRequest, params: { id: string }) => {
  try {
    await connectDB();
    const task = await TaskModel.findById(params.id);
    if (!task) {
      return NextResponse.json({
        status: 404,
        message: "タスクが見つかりません",
      });
    }
    return NextResponse.json({
      status: 200,
      task,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      status: 500,
      message: "タスクの取得に失敗しました",
    });
  }
};
