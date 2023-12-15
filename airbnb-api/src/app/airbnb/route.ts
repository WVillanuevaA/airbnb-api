import { NextResponse, NextRequest } from "next/server";

import { places } from "@/mock/places";

export function GET(res: NextRequest) {
    return NextResponse.json(places);
}

