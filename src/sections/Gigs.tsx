import useExternalScripts from "../hooks/useExternalScripts";

export const Gigs: React.FC = () => {
    useExternalScripts("https://widget-app.songkick.com/injector/8267363");

    return (
        <>
            <h1><a id="gigs" href="/#"></a>Gigs</h1>
            <div className="gigs">
                <a
                    href="https://www.songkick.com/artists/8267363"
                    className="songkick-widget"
                    data-theme="dark"
                    data-track-button="off"
                    data-detect-style="off"
                    data-background-color="#13171f"
                    data-font-color="rgb(255,255,255,1)"
                    data-button-bg-color="rgb(255,255,255,1)"
                    data-button-text-color="rgb(0,0,0,1)"
                    data-locale="en"
                    data-other-artists="on"
                    data-share-button="off"
                    data-country-filter="off"
                    data-rsvp="off"
                    data-request-show="off"
                    data-past-events="on"
                    data-past-events-offtour="off"
                    data-remind-me="off"
                    style={{ display: "none" }}>Gigs
                </a>
            </div>
        </>
    );
}