import Navbar from "@/Components/Navbar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <div>
            <Head>
                <title>{`Dashboard - ${auth.user.name}`}</title>
            </Head>
            <AuthenticatedLayout user={auth.user}>
                <div>wellcome</div>
            </AuthenticatedLayout>
        </div>
    );
}
