import { supabaseClient, supabaseTableItems } from "https://deno.land/x/supabase_deno@v1.0.5/mod.ts";

const sbclient = new supabaseClient("https://xzqqlvndzjzyhdhfzxmx.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6cXFsdm5kemp6eWhkaGZ6eG14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc5MTYxMjEsImV4cCI6MTk4MzQ5MjEyMX0.sCw6V51VhLnKWxPHFwcwpSMCvdD42KPbZ2kyEys73c8");

export const addData = async (data: any) => {
    const sbTableItems = new supabaseTableItems(sbclient, "quixada");
    const result = await sbTableItems.add(data);
    return result;
}

export const getData = async (game_id: string) => {
    const sbTableItems = new supabaseTableItems(sbclient, "quixada");
    return await sbTableItems.get("game_id", game_id)
}