// app/api/save-booking/route.js
import { connectDB } from "../../lib/DbConnection";
import Booking from "../../models/Booking";
import { NextResponse } from "next/server";


export async function POST(req) {
  try {
    const body = await req.json();   // get entire Cal.com response
    await connectDB();

    // Save the whole API response as `raw`
    const newBooking = await Booking.create({ raw: body });

    return NextResponse.json(newBooking, { status: 201 });
  } catch (error) {
    console.error("Booking save error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}