function PageTemplate({ children, header, footer }) {
    return <>
        {header}
        <main className="container body-container">{children}</main>
        {footer}
    </>;
}

export default PageTemplate;