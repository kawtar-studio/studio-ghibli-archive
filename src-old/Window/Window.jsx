import "./Window.css";

export default function Window({
    title,
    subtitle,
    children,
}) {
    return (
        <section className="window">

            <header className="window-header">

                <div className="window-buttons">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className="window-heading">
                    <h3>{title}</h3>
                    {subtitle && <small>{subtitle}</small>}
                </div>

            </header>

            <div className="window-body">
                {children}
            </div>

        </section>
    );
}