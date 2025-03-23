import { useState } from "react";
import '../App.css'

const books = [
    { 
        "_id": 1, 
        "title": 'Martyr!', 
        "author": 'Kaveh Akbar',
        "synopsis": 'A paean to how we spend our lives seeking meaning—in faith, art, ourselves, others—in which a newly sober, orphaned son of Iranian immigrants, guided by the voices of artists, poets, and kings, embarks on a search that leads him to a terminally ill painter living out her final days in the Brooklyn Museum.',
        "coverImage": './images/f_akb_martyr.jpg',
        "category": 'Fiction', 
        "trending": "true",
        "oldPrice": 17.99,
        "newPrice": 13.96
    },
    { 
        id: 2, 
        title: 'James', 
        author: 'Percival Everett',
        synopsis: "A brilliant reimagining of Adventures of Huckleberry Finn—both harrowing and ferociously funny—told from the enslaved Jim's point of view.",
        image: './images/f_eve_james.jpg',
        genre: 'Fiction',
        weeks: 2
    },
    { 
        id: 3,
        title: 'The Life Impossible',
        author: 'Matt Haig',
        synopsis: 'What looks like magic is simply a part of life we do not understand yet…',
        image: './images/f_hai_lifeimpossible.jpg',
        genre: 'Fiction',
        weeks: 3
    },
    { 
        id: 4, 
        title: 'The God of the Woods', 
        author: 'Liz Moore', 
        synopsis: 'When a teenager vanishes from her Adirondack summer camp, two worlds collide.',
        image: './images/f_moo_godofwoods.jpg',
        genre: 'Fiction', 
        "weeks": 5 
    },
    { 
        id: 5,
        title: 'After Annie',
        author: 'Anna Quindlen',
        synopsis: 'When Annie Brown dies suddenly, her husband, her four young children and her closest friend are left to struggle without the woman who centered their lives.',
        image: './images/f_qui_annie.jpg',
        genre: 'Fiction',
        weeks: 2
    },

    { 
        id: 6, 
        title: 'Intermezzo', 
        author: 'Sally Rooney',
        synopsis: 'An exquisitely moving story about grief, love, and family—but especially love.',
        image: './images/f_roo_intermezzo.jpg',
        genre: 'Fiction',
        weeks: 4
    },
    { 
        id: 7, 
        title: 'The Housemaid', 
        author: 'Freida McFadden', 
        synopsis: 'An addictive psychological thriller with a jaw-dropping twist.',
        image: './images/m_fmc_housemaid.jpg',
        genre: 'Mystery', 
        weeks: 15
    },
    { 
        id: 8, 
        title: 'The Hunter', 
        author: 'Tana French', 
        synopsis: 'It is a blazing summer when two men arrive in a small village in the West of Ireland. One of them is coming home. Both of them are coming to get rich. One of them is coming to die.',
        image: './images/m_fre_hunter.jpg',
        genre: 'Mystery',
        weeks: 8
    },
    { 
        id: 9, 
        title: 'The Blue Hour', 
        author: 'Paula Hawkins', 
        synopsis: 'Welcome to Eris: An island with only one house, one inhabitant, one way out. Unreachable from the Scottish mainland for twelve hours each day.',
        image: './images/m_haw_bluehour.jpg',
        genre: 'Mystery',
        weeks: 6
    },
    { 
        id: 10, 
        title: 'We Solve Murders', 
        author: 'Richard Osman', 
        synopsis: 'A brand new series. An iconic new detective duo. And a puzzling new murder to solve...',
        image: './images/m_osm_murders.jpg',
        genre: 'Mystery',
        weeks: 9
    },
    { 
        id: 11, 
        title: 'The Grey Wolf', 
        author: 'Louis Penny', 
        synopsis: 'The nineteenth mystery in the #1 New York Times bestselling Armand Gamache series.',
        image: './images/m_pen_wolf.jpg',
        genre: 'Mystery',
        weeks: 10
    },
    { 
        id: 12, 
        title: 'The Last One at the Wedding', 
        author: 'Jason Rekulak', 
        synopsis: 'A breathtaking work of suspense about a father trying to save his daughter from a life-altering decision that will put everything he loves on the line.',
        image: './images/_m_rek_wedding.jpg',
        genre: 'Mystery',
        weeks: 4
    },
    { 
        id: 13, 
        title: "Merlin's Tour of the Universe: A Traveler's Guide to Blue Moons and Black Holes, Mars, Stars, and Everything Far", 
        author: 'Neil DeGrasse Tyson', 
        synopsis: 'A delightful journey through the cosmos, his fictional character Merlin responds to popular questions asked by adults and children alike.',
        image: './images/n_deg_merlin.jpg',
        genre: 'Nonfiction', 
        weeks: 6
    },
    { 
        id: 14, 
        title: 'John Lewis: A Life',
        author: 'David Greenberg', 
        synopsis: 'A comprehensive, authoritative biography of Civil Rights icon John Lewis.',
        image: './images/n_gre_lewis.jpg',
        genre: 'Nonfiction',
        weeks: 15
    },
    { 
        id: 15, 
        title: 'Nexus: A Brief History of Information Networks from the Stone Age to AI', 
        author: 'Yuval Noah Harari',
        synopsis: 'The groundbreaking story of how information networks have made, and unmade, our world.',
        image: './images/n_har_nexus.jpg',
        genre: 'Nonfiction', 
        weeks: 8
    },
    { 
        id: 16, 
        title: "Don't Believe Everything You Think", 
        author: 'Joseph Nguyen',
        synopsis: 'Learn how to overcome anxiety, self-doubt & self-sabotage without needing to rely on motivation or willpower.',
        image: './images/n_ngu_think.jpg',
        genre: 'Nonfiction',
        weeks: 5
    },
    { 
        id: 17, 
        title: 'The Elements of Marie Curie: How the Glow of Radium Lit a Path for Women in Science', 
        author: 'Dava Sobel',
        synopsis: 'A luminous chronicle of the life and work of the most famous woman in the history of science, and the untold story of the many young women trained in her laboratory who were launched into stellar careers of their own.',
        image: './images/n_sob_curie.jpg',
        genre: 'Nonfiction',
        weeks: 8
    },
    { 
        id: 18, 
        title: 'The Backyard Bird Chronicles', 
        author: 'Amy Tan', 
        synopsis: 'A gorgeous, witty account of birding, nature, and the beauty around us that hides in plain sight.',
        image: './images/n_tan_backyardbird.jpg',
        genre: 'Nonfiction',
        weeks: 8
    },
    { 
        id: 19, 
        title: 'The Most Wonderful Crime of the Year', 
        author: 'Ally Carter',
        synopsis: 'Knives Out gets a rom-com twist in this rivals-to-lovers Christmas romance-mystery.',
        image: './images/r_car_crimeofyear.jpg',
        genre: 'Romance', 
        weeks: 4
    },
    { 
        id: 20, 
        title: 'This Summer Will Be Different', 
        author: 'Carley Fortune',
        synopsis: "This summer they will keep their promise. This summer they won’t give into temptation. This summer will be different." ,
        image: './images/r_for_summer.jpg',
        genre: 'Romance',
        weeks: 4
},
    { 
        id: 21, 
        title: 'Not In Love', 
        author: 'Ali Hazelwood',
        synopsis: 'A forbidden, secret affair proves that all is fair in love and science.',
        genre: 'Romance',
        weeks: 6
    },
    { 
        id: 22, 
        title: 'Funny Story', 
        author: 'Emily Henry', 
        synopsis: 'A shimmering, joyful new novel about a pair of opposites with the wrong thing in common.',
        image: './images/r_hen_funnystory.jpg',
        genre: 'Romance',
        weeks: 15
    },
    { 
        id: 23, 
        title: 'The Paradise Problem', 
        author: 'Christina Lauren',
        synopsis: 'A delicious new romance between the buttoned-up heir of a grocery chain and his free-spirited artist ex as they fake their relationship in order to receive a massive inheritance.',
        image: './images/r_lau_paradise.jpg',
        genre: 'Romance',
        weeks: 10
    },
    { 
        id: 24, 
        title: 'A Jingle Bell Mingle', 
        author: 'Julie Murphy & Sierra Simone',
        synopsis: 'What happens when there is no room at the inn and you and your potentially demonic cat become roommates with your grumpy one-night stand?',
        image: './images/r_mur_mingle.jpg',
        genre: 'Romance',
        weeks: 5
    }
];

function SingleBook ({title, author, image}) {
    return (
        <li >
            <img src={image} width="500" alt={title}/>
            <h2>{title}</h2>
            <p>{author}</p>
        </li>
    )
}

function AllBooks () {

    const [currentBooks, setCurrentBooks] = useState(books)

    const bookList = currentBooks.map(book => (
        <SingleBook
            key={book.id}
            image={book.image}
        />
    ))

    return (
        <>
        <section class="section">
            <h2 class="head2"><i class="fa-solid fa-book"></i> Available Books</h2>
        </section>
                      
                <h3 className="head3a"> <i className="fa-solid fa-glasses"></i> Literary Fiction</h3>
                <br/>
                <div className="row no-gutter">
                    <div className="image-row">
                        <div className="card">
                        <img src="./images/f_akb_martyr.jpg" className="card-img-top" alt="Martyr! cover"/>
                            <a href="https://www.amazon.com/Martyr-novel-Kaveh-Akbar/dp/0593537610/ref=asc_df_0593537610?mcid=fc3851af25243f36bafef15837ee1c87&hvocijid=17597775262988644108-0593537610-&hvexpln=73&tag=hyprod-20&linkCode=df0&hvadid=721245378154&hvpos=&hvnetw=g&hvrand=17597775262988644108&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9199189&hvtargid=pla-2281435179538&psc=1" target="_blank" className="btn btn-outline-info"> More Info</a>
                            <button type="button" className="btn btn-outline-warning">Add to cart</button>
                        </div>
                        <div className="card">
                        <img src="./images/f_eve_james.jpg" className="card-img-top" alt="James cover"/>
                            <a href="https://www.amazon.com/James-Novel-Percival-Everett/dp/0385550367/ref=sr_1_1?dib=eyJ2IjoiMSJ9.ifSVdq4jaMdet3NeDJQLba9w5IxhbwsPL9Cy2Fq-ken8KOJNgXCWmPgi-hJ5qQlozWohu4VYde2NlljDEcBEDH-ublwj30GThjzs1RZYcZL4fRENmWPlxlWQV0G-EDMqmX6r0pm3hR-Ej9UO4S2h1ZrBGlh9yt02z6y5-shTSMLlxHqg3RQTosk42KvenC3jUBqLNchaitSXIjjhsjt5ltZ9p1FuIE7lmSSlK4zZO0A.0_48Gb6THSPrxKYKIN9753xLfbWuecTvsxP5QVW54qU&dib_tag=se&hvadid=692453162315&hvdev=c&hvlocphy=9028097&hvnetw=g&hvqmt=e&hvrand=13028750947086518869&hvtargid=kwd-2281045318464&hydadcr=10054_13483919&keywords=james+a+novel+by+percival+everett&qid=1736271948&sr=8-1" target="_blank" className="btn btn-outline-info">More Info</a>
                            <button type="button" className="btn btn-outline-warning">Add to cart</button>
                        </div>
                        <div className="card">
                        <img src="./images/f_hai_lifeimpossible.jpg" className="card-img-top" alt="Life Impossible cover"/>
                            <a href="https://www.amazon.com/Life-Impossible-Novel-Matt-Haig/dp/0593489276/ref=tmm_hrd_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.QIUCkm2fBBVjic_OYGK0A_yIRd7s_Me91aKbhRapLb0GcdbEVfti2gN3IJf-9HggVRN-QLXTHSE4FIjRJCDeDfGb7IgE_0scvqUmCxgSR4ZzrwgS4xZywnPax_xJ-C47h5QD6RbzA_q2S3-77YFKRoLtiqs8WnB6SBWNlWXo_I0KPFyJgSwu9QGW3EvrFmtzjob3bQQXFUrW94CirxkeXJBgNtXKbBVZkSM1uvJpgGg.exh-St5AufqCXlDz-HVamWmzzbkj4fJxRqcxPjGKma4&qid=1736302394&sr=8-1" target="_blank" className="btn btn-outline-info">More Info</a>
                            <button type="button" className="btn btn-outline-warning">Add to cart</button>
                        </div>
                        <div className="card">
                        <img src="./images/f_moo_godofwoods.jpg" className="card-img-top" alt="The Gods of the Woods cover"/>
                            <a href="https://www.amazon.com/God-Woods-Novel-Liz-Moore/dp/0593418913" target="_blank" className="btn btn-outline-info">More Info</a> 
                            <button type="button" className="btn btn-outline-warning">Add to cart</button>
                        </div>
                        <div className="card">
                        <img src="./images/f_qui_annie.jpg" className="card-img-top" alt="After Annie cover"/>
                            <a href="https://www.amazon.com/After-Annie-Novel-Anna-Quindlen/dp/0593229800/ref=sr_1_1?dib=eyJ2IjoiMSJ9.aaobkJ-T3RYwJJmk_8PrrZ94bJQ2O0-sFjcNYd3hIl0Hd-his3Bm8x3THxG_dbp1t_xkTCfteVpD_7-iLIssg2UwhTQTLumfr19ymvUEs8RNGfKa4YtJk2LYrwwLdkxCahHExPJZVlq6wO7KYLUjmxeECj3oRmVM1XMblSHiSVDSIFti03qe-h5uooaaWmEwRtbRd5k0a99hkO76BRGXkO0qkLEqY8ph306ABRc3w18.t8RVTwTzwbQxw6p-D8vdDIiNTkwkkZ0PnBI7pNfuBYE&dib_tag=se&hvadid=694358538361&hvdev=c&hvlocphy=9199189&hvnetw=g&hvqmt=e&hvrand=4244578407747167475&hvtargid=kwd-2273671825347&hydadcr=10028_13483877&keywords=after+annie+by+anna+quindlen&qid=1736272423&sr=8-1" target="_blank" className="btn btn-outline-info">More Info</a>
                            <button type="button" className="btn btn-outline-warning">Add to cart</button>
                        </div>
                        <div className="card">
                        <img src="./images/f_roo_intermezzo.jpg" className="card-img-top" alt="Intermezzo cover"/>
                            <a href="https://www.amazon.com/Intermezzo-Novel-Sally-Rooney/dp/0374602638/ref=sr_1_1?dib=eyJ2IjoiMSJ9.Ikp8pHra8qkXjimVskiXd-plrh_OBU4iCsC_HFxlPlCvpXHicVbyDA_WSasYpoGwXG6WMyFJcTxGPc9JRrg0NuOW27Btix9tIB7VRfc32FS75CD1153fCuxMOtG7oQ5W-rLNQnY1ftp4tnbhaOh21uMA0JplbOfGwIRZDKM_EByFehO15Z9xqad4auuHvB791CS2VTWgXriJgtnMcMypUBpULj2XPDOjSNvfwKjaPs0.cQFwrAg8mhRu0n4dgGuf_P8Qddrs8auz3aBr1TCOjSQ&dib_tag=se&hvadid=616863311958&hvdev=c&hvlocphy=9028097&hvnetw=g&hvqmt=e&hvrand=2643670633878199120&hvtargid=kwd-106109084&hydadcr=24665_13611781&keywords=intermezzo&qid=1736272459&sr=8-1" target="_blank" className="btn btn-outline-info">More Info</a>
                            <button type="button" className="btn btn-outline-warning">Add to cart</button>
                        </div>
                    </div>
                </div>
                <br/>
                <h3 className="head3b"> <i className="fa-solid fa-user-secret"></i> Mystery & Thrillers</h3>
                <br/>
                <div className="row no-gutter">
                    <div className="image-row">
                        <div className="card">
                        <img src="./images/m_fmc_housemaid.jpg" className="card-img-top" alt="The Housemaid cover"/>
                            <a href="https://www.amazon.com/Housemaid-absolutely-addictive-psychological-jaw-dropping/dp/1803144386/ref=asc_df_1803144386?mcid=6b364353a7f5317ca3ca515c716ee423&hvocijid=17850512634557970011-1803144386-&hvexpln=73&tag=hyprod-20&linkCode=df0&hvadid=721245378154&hvpos=&hvnetw=g&hvrand=17850512634557970011&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9028097&hvtargid=pla-2281435177858&psc=1" target="_blank" className="btn btn-outline-info">More Info</a>
                            <button type="button" className="btn btn-outline-warning">Add to cart</button>
                        </div>
                        <div className="card">
                        <img src="./images/m_fre_hunter.jpg" className="card-img-top" alt="The Hunter cover"/>
                            <a href="https://www.amazon.com/Hunter-Novel-Tana-French/dp/0593493435/ref=asc_df_0593493435?mcid=6e99ff3696fd3223bb1ce2ec6111d934&hvocijid=319326970182283285-0593493435-&hvexpln=73&tag=hyprod-20&linkCode=df0&hvadid=692875362841&hvpos=&hvnetw=g&hvrand=319326970182283285&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9028097&hvtargid=pla-2281435176218&psc=1" target="_blank" className="btn btn-outline-info">More Info</a>
                            <button type="button" className="btn btn-outline-warning">Add to cart</button>
                        </div>
                        <div className="card">
                        <img src="./images/m_haw_bluehour.jpg" className="card-img-top" alt="The Blue Hour cover"/>
                            <a href="https://www.amazon.com/Blue-Hour-Novel-Paula-Hawkins-ebook/dp/B0CTYB2221/ref=sr_1_1?dib=eyJ2IjoiMSJ9.4YCKzkDpPJeEdxOgdwEkZ7edd0mcVgaYj20A4O4xPkLlm_ZWkbwIyGl349wV45imLw3jFUtB_qjY9cLlWqwk0R2x0SaqSaObVYMugykIezFWC3a-qOS5omRa7l9NyZFNfCJcn_4WjNcFHUGFrAibhqOAlxug-W_26gqEKZR52CKj-dQYDBE4Fsl0wbRf0d7HJBfsctw_PpAfxnF9SR7fCDI2AH2Fw5FRs4TQfDQtpCo.8mQFfONy5Oamz3xcBwH1EIrixXnTVh3MHBC-CpbA3-Q&dib_tag=se&hvadid=630833749644&hvdev=c&hvlocphy=9199189&hvnetw=g&hvqmt=e&hvrand=14551586256179456107&hvtargid=kwd-59413706&hydadcr=24662_13626696&keywords=the+blue+hour&qid=1736275297&sr=8-1" target="_blank" className="btn btn-outline-info">More Info</a>
                            <button type="button" className="btn btn-outline-warning">Add to cart</button>
                        </div>
                        <div className="card">
                        <img src="./images/m_osm_murders.jpg" className="card-img-top" alt="We Solve Murders cover"/>
                            <a href="https://www.amazon.com/We-Solve-Murders-Richard-Osman/dp/059365322X" target="_blank" className="btn btn-outline-info">More Info</a>
                            <button type="button" className="btn btn-outline-warning">Add to cart</button>
                        </div>
                        <div className="card">
                        <img src="./images/m_pen_wolf.jpg" className="card-img-top" alt="The Grey Wolf cover"/>
                            <a href="https://www.amazon.com/Grey-Wolf-Novel-Inspector-Gamache/dp/1250328136/ref=sr_1_1?dib=eyJ2IjoiMSJ9.qqnxEO1oEwnSCo09_8dqLCylceIBIejLWUG-j9f3HXk6HKq5milg8BRgTkeNvjSZQBFFWQY4bJsGBGnUJeNb3NdMW9baYov5OdTv4hm3Vh08wmcvS2eo7SCfe_OnKWt07J0G3tQeoe7DAw5W02VExPf0RdDjXGp3CNx3UTA-d6zMDtNwnHRVw7cTX1eVAQP1uyAHhABtfR91S3HwWq2w-N1K-mkO0O89_JZWwXHZbDE.u1GIS2CAFIWdou69BskZeUUJTY-n-JHrbUI2Yozypgo&dib_tag=se&hvadid=580696544773&hvdev=c&hvlocphy=9199189&hvnetw=g&hvqmt=e&hvrand=5009283931908764739&hvtargid=kwd-872641641&hydadcr=22532_13493262&keywords=the+grey+wolf&qid=1736275579&sr=8-1" target="_blank" className="btn btn-outline-info">More Info</a>
                            <button type="button" className="btn btn-outline-warning">Add to cart</button>
                        </div>
                        <div className="card">
                        <img src="./images/m_rek_wedding.jpg" className="card-img-top" alt="The Last One at the Wedding cover"/>
                            <a href="https://www.amazon.com/Last-One-Wedding-Novel-ebook/dp/B0CPWT13KW" target="_blank" className="btn btn-outline-info">More Info</a>
                            <button type="button" className="btn btn-outline-warning">Add to cart</button>
                        </div>
                    </div>
                </div>
                <br/>
                <h3 className="head3c"> <i className="fa-solid fa-brain"></i> Nonfiction</h3>
                <br/>
                <div className="row no-gutter">
                    <div className="image-row">
                        <div className="card">
                        <img src="./images/n_deg_merlin.jpg" className="card-img-top" alt="Merlin's Tour cover"/>
                            <a href="https://www.amazon.com/Merlins-Universe-Revised-Updated-Twenty-First/dp/1665019859/ref=sr_1_1?dib=eyJ2IjoiMSJ9.3QvkBVN0u0DIo_yq-6Tkpyezr2_jiTTtlDPOM_9VhNXSGfOV-Xtx3J1UwGX-60yVGlsvODLhfDLzoZaHpkwvbt9PAz1hIsXpVqFFXpz6zJ2jeCEjvaglz84R_q8FXRlRKZ3CIzKCncjZWqUZ6w6X8HQ8LTsg-ZTCKv-paZjo7l0gEAy-okO9C51TEEMx3TaS9knak5PrPPEZjysOIt8adtFuS82t0p4rRoIJ9owtw3I.c-JUeoedRv1rH621u99eYPQBvogFXSnSlHTTJzVX5Wk&dib_tag=se&hvadid=580696541920&hvdev=c&hvlocphy=9028097&hvnetw=g&hvqmt=e&hvrand=8636944241930496638&hvtargid=kwd-6246210873&hydadcr=22569_13493349&keywords=merlin%27s+tour+of+the+universe&qid=1736302306&sr=8-1" target="_blank" className="btn btn-outline-info">More Info</a>
                            <button type="button" className="btn btn-outline-warning">Add to cart</button>
                        </div>
                        <div className="card">
                        <img src="./images/n_gre_lewis.jpg" className="card-img-top" alt="John Lewis cover"/>
                            <a href="https://www.amazon.com/John-Lewis-Life-David-Greenberg/dp/1982142995/ref=sr_1_1?dib=eyJ2IjoiMSJ9.dIpp8WMt3WKQ-7TPH2wyYPFZjViV31T0-14HF3yxcdpDt_nJXmcPHWrlYGDsgUrQP1wZ5SJRIuJSHVvnVoD1BDAMi0N_DmoGfeZimGxQ7EX3MbwWCp-2Y2ZiFJFh132eal42KKwtyVktWiQeua14kAb1d1UuXe4TbFWqeoufuC_Xgu_fe9vjqvDBTxh8ZOsTGVBXmp8GmbzdXc4Ic9m4WE9S6i7ih5nVC0nWWUr1aVM.Q69eCgItsJ9nX6n5P-Bn_8XiOvwf39MFpZjGbbTyMk0&dib_tag=se&hvadid=705627571118&hvdev=c&hvlocphy=9028097&hvnetw=g&hvqmt=e&hvrand=6611623422585774234&hvtargid=kwd-2327349137006&hydadcr=22096_13323313&keywords=john+lewis+a+life&qid=1736276239&sr=8-1" target="_blank" className="btn btn-outline-info">More Info</a>
                            <button type="button" className="btn btn-outline-warning">Add to cart</button>
                        </div>
                        <div className="card">
                        <img src="./images/n_har_nexus.jpg" className="card-img-top" alt="Nexus cover"/>
                            <a href="https://www.amazon.com/Nexus-Brief-History-Information-Networks/dp/B0CT3Y5LL9/ref=sr_1_1?dib=eyJ2IjoiMSJ9.u3vmoY5D_YM0k9JEav4oujQ3I8qtmTUve2Z8vI7st7Ha7ya9scYQDRnS1geVXdrSUfDxjCSmXCpgYdJUi4mVSeHHvbaMkNV6gMcsttB8gEcOIRztv0Wgk7717Z7X33gscgH2g_BdgMObLLbpUqgbHHlJoD8uAceZLz-ImQrfWZ5jytoILQiQMp59Bd_o2chMz3o6PpphirhRSTRgQBB9X8_m7HbbYtSsj7OpPjj01nU.DRC-vLI1R0pEA84iQvFd2X7IDWLqamDGZxoBFUUDeqY&dib_tag=se&hvadid=689006834782&hvdev=c&hvlocphy=9028097&hvnetw=g&hvqmt=e&hvrand=16978580023540329852&hvtargid=kwd-2272876753409&hydadcr=15303_13517969&keywords=nexus+yuval+noah+harari&qid=1736276296&sr=8-1" target="_blank" className="btn btn-outline-info">More Info</a>
                            <button type="button" className="btn btn-outline-warning">Add to cart</button>
                        </div>
                        <div className="card">
                        <img src="./images/n_ngu_think.jpg" className="card-img-top" alt="Don't Believe Everything You Think cover"/>
                            <a href="https://www.amazon.com/Dont-Believe-Everything-Think-Expanded/dp/B0D47VYQMY/ref=sr_1_1?dib=eyJ2IjoiMSJ9.bLNU8JFwgouyqJqLJEl6IDtGm6fzV61huzTzwPrbWZPd00W5cS6OV4KAAAfi6E64tdbpQ_2gVInwf_BohgOAXvgVhwhf_8fSsA3HCdJlilFRi5tAWuOcIn0EP4tJQwZ9r6dx9PbZbKuj97uN8g--hyf1WpE4nXAA4BFWa-ruqdg.5cUo457OE2yElR2WP8dxZSMpEq36PK5xjkMrq1tj3fQ&dib_tag=se&hvadid=713543445331&hvdev=c&hvlocphy=9199189&hvnetw=g&hvqmt=e&hvrand=12923416230511414426&hvtargid=kwd-1932136999668&hydadcr=22593_13730688&keywords=don+t+believe+everything+u+think&qid=1736276418&sr=8-1" target="_blank" className="btn btn-outline-info">More Info</a>
                            <button type="button" className="btn btn-outline-warning">Add to cart</button>
                        </div>
                        <div className="card">
                        <img src="./images/n_sob_curie.jpg" className="card-img-top" alt="Marie Curie cover"/>
                            <a href="https://www.amazon.com/Elements-Marie-Curie-Radium-Science/dp/0802163823/ref=sr_1_1?dib=eyJ2IjoiMSJ9.JHvpeXPwd7YBCwRYJ273c6VKJFoEyVbtWEYSNbAcKvvMqcMYi5mynlNSnJm6qnXt4sVOhqFzIzzBSG_Ck2Nsd29DXznBLK0ILCqKWBDr8iJEjZnqtG7W8HJrmO64CaWUxm4owWuiDkc8dwYiVDU89TJ-SuCdn6Sf4jCQlMNvucHQiTin1c-_VazBek1H9HXWJZfVupBi64CFE9no5i5A7D1eh4MARFqSNC_rGTSPiS8.trXQco2W5DFtueofQohYrVVG2J8aE6r_aXQETfDnlfA&dib_tag=se&hvadid=708219085603&hvdev=c&hvlocphy=9028097&hvnetw=g&hvqmt=e&hvrand=481553096973214786&hvtargid=kwd-2335065825839&hydadcr=15090_13748785&keywords=the+elements+of+marie+curie&qid=1736302015&sr=8-1" target="_blank" className="btn btn-outline-info">More Info</a>
                            <button type="button" className="btn btn-outline-warning">Add to cart</button>
                        </div>
                        <div className="card">
                        <img src="./images/n_tan_backyardbird.jpg" className="card-img-top" alt="The Backyard Bird Chronicles cover"/>
                            <a href="https://www.amazon.com/Backyard-Bird-Chronicles-Amy-Tan/dp/0593536134/ref=sr_1_1?dib=eyJ2IjoiMSJ9.gns8Xhf0RXUttwnvvnvro5PDM0XINKxEq5CS0_1LJO1HF8j2pePyHJowaSq1xjR_mXGPlRh_xk9fHh9r_KmWS7mJELDdvFsjK2WpE73NWmb5XZsadetedQL8FMi4q7Fm4C9GjNS_KknDuy9oqHWHPtXuDd9TCz4AFqI4lN3mqGZpamwCFdBqDUAEizuBsUu0hmfWPhp7ETAINXXeN1xRLXUaZ7kE89ejdFMcT3wUK4o.7mEeDS8gAjnxpFAqglQo94JTj-7sbQRfwvx_v54hsvs&dib_tag=se&hvadid=694984210953&hvdev=c&hvlocphy=9199189&hvnetw=g&hvqmt=e&hvrand=1241923230993664241&hvtargid=kwd-2200771025742&hydadcr=22159_13541042&keywords=the+backyard+bird+chronicles&qid=1736276492&sr=8-1" target="_blank" className="btn btn-outline-info">More Info</a>
                            <button type="button" className="btn btn-outline-warning">Add to cart</button>
                        </div>
                    </div>
                </div>
                <br/>
                <h3 className="head3d"> <i className="fa-solid fa-face-kiss-wink-heart"></i> Romance</h3>
                <br/>
                <div className="row no-gutter">
                    <div className="image-row">
                        <div className="card">
                        <img src="./images/r_car_crimeofyear.jpg" className="card-img-top" alt="The Most Wonderful Crime of the Year cover"/>
                            <a href="https://www.amazon.com/Most-Wonderful-Crime-Year-Novel-ebook/dp/B0CRQHRDK1/ref=sr_1_1?crid=1SQICXIX0FOMS&dib=eyJ2IjoiMSJ9.L_JcyS0cj9rJPZ9JCZbMRuKtMi64fUkm3UmIGGe3hXiuQwUDOJOt5-1g0t4ACrxH9ic6QDOZNAUxm7IbWOk4ZNVYwPxErTAgAw88kFvCsYYhK3KS7NWT4ouRNixuQS1nxL14-vJfjrTXUUMxDae0lTTAhvFaXDD4S69hRtZY3eCZpVf1KmLCKKdEZAKuVfyypJrk4gOX96vTocFRubpvNEDVfQpQyxJtv9Ez7Gsff5c.OM9S42t6m4o63O45sY6sNj6J_ouFOvKDZIbOv6vL2a4&dib_tag=se&keywords=the+most+wonderful+crime+of+the+year&qid=1736277130&sprefix=most+wonder%2Caps%2C121&sr=8-1" target="_blank" className="btn btn-outline-info">More Info</a>
                            <button type="button" className="btn btn-outline-warning">Add to cart</button>
                        </div>
                        <div className="card">
                        <img src="./images/r_for_summer.jpg" className="card-img-top" alt="This Summer Will Be Different cover"/>
                            <a href="https://www.amazon.com/This-Summer-Will-Be-Different/dp/0593638883/ref=sr_1_1?dib=eyJ2IjoiMSJ9.Ils_gBFpPQkgKzkl-41VkE-gKC40Dp0yG6Irc9NtXplmlxdvYbBqyqQ7gITx5i-0u1JRBgoF6TmSZFg5bYsss91rqAt21xiYTeH0sdpmv_7FZrg5vfdtCwp-CKxvrx2DGMQJakDR7de_jly-i6YGgokUoVm68osoAkKUxRWiP--i9Cdw3mtwhy4ukIlThXrHiq3R-Tq3hQzV7BzO6WV3xSdJlE-tN8MTyUYfMh1uHcM.JmS_sS54HfRe6TjNz_0g_QFWv4s3e-EqxvQbDIP4Dlo&dib_tag=se&hvadid=671553314846&hvdev=c&hvlocphy=9028097&hvnetw=g&hvqmt=e&hvrand=4634731028059111130&hvtargid=kwd-2380483762752&hydadcr=7659_13589732&keywords=this+summer+will+be+different&qid=1736302180&sr=8-1" target="_blank" className="btn btn-outline-info">More Info</a>
                            <button type="button" className="btn btn-outline-warning">Add to cart</button>
                        </div>
                        <div className="card">
                        <img src="./images/r_haz_notinlove.jpg" className="card-img-top" alt="Not in Love cover"/>
                            <a href="https://www.amazon.com/Not-Love-Ali-Hazelwood/dp/0593550420/ref=sr_1_1?dib=eyJ2IjoiMSJ9.hbK6uZFfwbLbmIcv8Y3xjefWoe2kfOJs6FhhfkOyFQrWnOnh-NyfFotkyWndFHzJNKNbolZBlNvxc7FhgADb8vHr112VYE-CALCtRyEZYHvghTKFx4j5wm_6Ry7xoGjz_v9aE63n6DrcxJ9e_YXCF-0_U6QJ6_JpzX1TkdaJ9RmMvloKAohAXJyYX2IfOdD4Ks3to4JakNDatHSb7QEk4ZLu7wH-zNHW5_5grQVhlTQ.2Mw2rG6Os-79PexsNnHClFR5FkYWQ9vR6bI37p2Y_eE&dib_tag=se&hvadid=700283188779&hvdev=c&hvlocphy=9028097&hvnetw=g&hvqmt=e&hvrand=4798505172922646682&hvtargid=kwd-2284980135555&hydadcr=3428_13534959&keywords=not+in+love+by+ali+hazelwood&qid=1736277085&sr=8-1" target="_blank" className="btn btn-outline-info">More Info</a>
                            <button type="button" className="btn btn-outline-warning">Add to cart</button>
                        </div>
                        <div className="card">
                        <img src="./images/r_hen_funnystory.jpg" className="card-img-top" alt="Funny Story cover"/>
                            <a href="https://www.amazon.com/Funny-Story-Emily-Henry/dp/0593441214/ref=sr_1_1?dib=eyJ2IjoiMSJ9.ONmxecEERmIBrSCjXXtRHjASsRkYDT89kW46tcIGam4TIB-VM9dTm1COQSjaOlwlpHIuJNFXFoNd3z_MV5_aOWmlV4l1ruwoWqQax4Mg3OHTbw3A_9D5mXe1uM835ENIu5hK_yBUBnI0A_m-82dOUUmen_wshqq2FGonfN_U-aW2xMUIgOvjD9dHOxo3YhdK9mfdKsAsTxyotrCO_Od7VUcf5acDPCOCJu3B8loaxnM.ReBd-_QXa2Urvt5u5hYcEImRv1HMmwA18-Jf8kS1naI&dib_tag=se&hvadid=697548894374&hvdev=c&hvlocphy=9199189&hvnetw=g&hvqmt=e&hvrand=391361320687154449&hvtargid=kwd-2295757915365&hydadcr=10054_13483919&keywords=emily+henry+funny+story+paperback&qid=1736277043&sr=8-1" target="_blank" className="btn btn-outline-info">More Info</a>
                            <button type="button" className="btn btn-outline-warning">Add to cart</button>
                        </div>
                        <div className="card">
                        <img src="./images/r_lau_paradise.jpg" className="card-img-top" alt="The Paradise Problem cover"/>
                            <a href="https://www.amazon.com/Paradise-Problem-Christina-Lauren-ebook/dp/B0CL5FS86S/ref=sr_1_1?dib=eyJ2IjoiMSJ9.3LZN0FsQrcPkzMAhc1lbWpW9RRlHFP4u0zNkj_5CIMo_kJAe2O7SwbBgVgRQPp2vLhbHSGQnpYM31bD318D0pgLIDjNNoc_Pv_YidDdPkK7h8xEjg-CF7JFXf_ohUQMxB6ChnIbYQSbYWvgZKSBSms_tkuRgGMHfOObyAGw_BWIql3uDk1yesV-g4GqB133k-Ng8cY2ApdQgq1efTiUWX--Ru-y58k2-eYaxOnNK8Uc.yS7VzueQS5guG2dVgVt5hj4nE_qYncOzJcUY0hTj7ug&dib_tag=se&hvadid=683812526583&hvdev=c&hvlocphy=9199189&hvnetw=g&hvqmt=e&hvrand=10693714000131320223&hvtargid=kwd-2236491367095&hydadcr=8104_13468434&keywords=the+paradise+problem&qid=1736276985&sr=8-1" target="_blank" className="btn btn-outline-info">More Info</a>
                            <button type="button" className="btn btn-outline-warning">Add to cart</button>
                        </div>
                        <div className="card">
                        <img src="./images/r_mur_mingle.jpg" className="card-img-top" alt="A Jingle Bell Mingle cover"/>
                            <a href="https://www.amazon.com/Jingle-Bell-Mingle-Novel-Christmas-ebook/dp/B0CS3X9WCZ/ref=sr_1_1?dib=eyJ2IjoiMSJ9.VPkOe7va2TV3kdoAzdFHyTserGOuwQbLxprBz4IUHJMtLHM1i0eyOsjDPKhWhosMqDndFq1BIhkeD4I_r3DI56KFGRJOGXd0gNJRLQURaccbC-AwSKXy6uG9fFucwGtzYr0M2zyWETgFx75zCqMuLeiNZNpy5khBD8yinofwcaD7jRhLKsToFrUI73lfaF-AKMFVvjHDcOHw05gWLiybLioHSBFJDDX74sHE3YNO6EY.la8WyRzOPATulF-jIDV5CJT3SaJ2fg4bOvfznXaUBcI&dib_tag=se&hvadid=713623636472&hvdev=c&hvlocphy=9028097&hvnetw=g&hvqmt=e&hvrand=10663874258541395132&hvtargid=kwd-2275033441160&hydadcr=22560_13730715&keywords=a+jingle+bell+mingle&qid=1736276938&sr=8-1" target="_blank" className="btn btn-outline-info">More Info</a>
                            <button type="button" className="btn btn-outline-warning">Add to cart</button>
                        </div>
                    </div>
                </div>
                <br/>
              
        </>
    )
}

export default AllBooks