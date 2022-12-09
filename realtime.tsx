import { createClient } from "https://esm.sh/@supabase/supabase-js@2.1.0";
const supabase = createClient(
  "https://xzqqlvndzjzyhdhfzxmx.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6cXFsdm5kemp6eWhkaGZ6eG14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc5MTYxMjEsImV4cCI6MTk4MzQ5MjEyMX0.sCw6V51VhLnKWxPHFwcwpSMCvdD42KPbZ2kyEys73c8",
);

export const prepare = (setCount: { (value: number|((prevState: number) => number)): void; (arg0: number): void; }) => {
    if (localStorage.getItem("user") == null) {
        localStorage.setItem("user", Math.random().toString());
    }
    const channel = supabase.channel("online-users", {
    config: {
        presence: {
        key: localStorage.getItem("user")?.toString(),
        },
    },
    });

    console.log(localStorage.getItem("user")?.toString());

    channel.on("presence", { event: "sync" }, () => {
    console.log("Online users: ", channel.presenceState());
    setCount(Object.keys(channel.presenceState()).length)
    });

    channel.on("presence", { event: "join" }, ({ newPresences }) => {
    console.log("New users have joined: ", newPresences);
    });

    channel.on("presence", { event: "leave" }, ({ leftPresences }) => {
    console.log("Users have left: ", leftPresences);
    });

    channel.subscribe(async (status) => {
    if (status === "SUBSCRIBED") {
        const status = await channel.track({ online_at: new Date().toISOString() });

        console.log(status);
    }
    });
}