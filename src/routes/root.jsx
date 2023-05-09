export default function Root() {
    return (
        <>
            {/* sidebar */}
            <div id="sidebar">
                <h1>React Router Contacts</h1>
                <div>
                    <form id="search-form" role="search">

                        {/* search field */}
                        <input
                            id="q"
                            aria-label="Search contacts"
                            placeholder="Search"
                            type="search"
                            name="q"
                        />

                        {/* Search spinner */}
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={true}
                        />
                        <div
                            className="sr-only"
                            aria-live="polite"
                        ></div>
                    </form>

                    {/* submit btn */}
                    <form method="post">
                        <button type="submit">New</button>
                    </form>
                </div>

                {/* List */}
                <nav>
                    <ul>
                        <li>
                            <a href={`/contacts/1`}>Your Name</a>
                        </li>
                        <li>
                            <a href={`/contacts/2`}>Your Friend</a>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* detail */}
            <div id="detail"></div>
        </>
    );
}