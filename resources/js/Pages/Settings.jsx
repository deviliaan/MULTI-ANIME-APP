import Authenticated from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";
import React, { useState } from "react";

function Settings({ auth }) {
    let { settings, version } = usePage().props;
    let [theme, setTheme] = useState(false);
    console.log(theme);
    return (
        <div>
            <Authenticated user={auth.user} header="settings">
                <div className="p-4">
                    <h2>App Version: {version}</h2>
                    <div className="flex justify-between">
                        <h2>Theme: {settings.theme} </h2>
                    </div>
                    <h2>Api Provider : {settings.api_provider}</h2>
                    <h2>Video Providers : {settings.video_providers}</h2>
                </div>
            </Authenticated>
        </div>
    );
}

export default Settings;
