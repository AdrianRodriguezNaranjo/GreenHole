"use server"

import { createClient } from "@/utils/supabase/server";

interface UpdateUserProps {
    data: {
        displayName: string;
    }
}

export async function updateUser(data: UpdateUserProps) {
 const supabase = createClient();

 const { error } = await supabase.auth.updateUser({
    data: {
        displayName: data.data.displayName,
    }
 })

 if (error) {
    return false
 } else {
    return true
 }
}

export async function getNewsItems() {
    const supabase = createClient()
    const { data, error } = await supabase.from('news').select('*')

    if (error) {
        return null
    } else {
        return data
    }
}