sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: 201 Created
    deactivate server

    Note right of browser: The browser fetches updated notes data

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "New note", "date": "2024-12-25" }, ... ]
    deactivate server

    Note right of browser: The browser updates the view to include the new note
