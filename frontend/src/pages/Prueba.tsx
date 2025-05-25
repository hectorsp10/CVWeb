import PersonList from "../features/Person/PersonList";

export default function Home() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Página principal</h1>
            <PersonList />
        </div>
    );
}