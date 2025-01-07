import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
   
    const dataDir = path.join(process.cwd(), 'data');
    const files = fs.readdirSync(dataDir);
    const data = files.map((file) => {
      const filePath = path.join(dataDir, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(fileContents); 
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error reading data directory:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
