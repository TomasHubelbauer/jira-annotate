# Jira Annotate

## Status

https://jira.atlassian.com/browse/JRASERVER-59101

CORS not set up on the API.
I do not want to have the admin have to whitelist a domain or something like that, no App Links, no Atlassian Connect bullshit.
I can get by with a user name and a passphrase when using Jira in the browser, I want the same from the API.

http://docs.atlassian.com/jira/REST/latest/#resources

DropBox Paper gets this right, it is possible. Until Atlassian get their shit together, this experiment is ceased.

## Configuring

`config.json`

- `hostName` without a trailing slash
- `userName`
- `passphrase`

```json
{
  "userName": "…",
  "passphrase": "…"
}
```

## Running

- Windows: `start index.html`
- Unix: `open index.html`

## Contributing

[Read the note list](./doc/notes.md)

[PR the task list](/doc/tasks.md)
