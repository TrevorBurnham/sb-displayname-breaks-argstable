# displayName breaks ArgsTable

Steps to replicate:

1. Visit http://localhost:6006/?path=/docs/example-button--primary
1. Note that the `ArgsTable` shows a "No inputs found for this component" message.

If `Button.displayName` is not set (or set to `'Button'`), the `ArgsTable` works as expected.
