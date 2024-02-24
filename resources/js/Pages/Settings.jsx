import { usePage } from "@inertiajs/react";
import React from "react";

function Settings() {
    let { settings } = usePage().props;
    return (
        <div>
            <div>
                <h2>Theme : {settings.theme}</h2>
                <h2>Api Provider : {settings.api_provider}</h2>
                <h2>Video Providers : {settings.video_providers}</h2>
            </div>
        </div>
    );
}

export default Settings;
