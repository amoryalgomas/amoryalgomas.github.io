var cookieconsent = function (e) {
    var n = {};

    function o(t) {
        if (n[t]) return n[t].exports;
        var i = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(i.exports, i, i.exports, o), i.l = !0, i.exports
    }
    return o.m = e, o.c = n, o.d = function (e, n, t) {
        o.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: t
        })
    }, o.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function (e, n) {
        if (1 & n && (e = o(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        if (o.r(t), Object.defineProperty(t, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var i in e) o.d(t, i, function (n) {
                return e[n]
            }.bind(null, i));
        return t
    }, o.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return o.d(n, "a", n), n
    }, o.o = function (e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, o.p = "", o(o.s = 26)
}([function (e, n, o) {
    "use strict";
    e.exports = function (e) {
        var n = [];
        return n.toString = function () {
            return this.map(function (n) {
                var o = function (e, n) {
                    var o = e[1] || "",
                        t = e[3];
                    if (!t) return o;
                    if (n && "function" == typeof btoa) {
                        var i = (r = t, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */"),
                            a = t.sources.map(function (e) {
                                return "/*# sourceURL=" + t.sourceRoot + e + " */"
                            });
                        return [o].concat(a).concat([i]).join("\n")
                    }
                    var r;
                    return [o].join("\n")
                }(n, e);
                return n[2] ? "@media " + n[2] + "{" + o + "}" : o
            }).join("")
        }, n.i = function (e, o) {
            "string" == typeof e && (e = [[null, e, ""]]);
            for (var t = {}, i = 0; i < this.length; i++) {
                var a = this[i][0];
                null != a && (t[a] = !0)
            }
            for (i = 0; i < e.length; i++) {
                var r = e[i];
                null != r[0] && t[r[0]] || (o && !r[2] ? r[2] = o : o && (r[2] = "(" + r[2] + ") and (" + o + ")"), n.push(r))
            }
        }, n
    }
}, function (e, n, o) {
    var t, i, a = {},
        r = (t = function () {
            return window && document && document.all && !window.atob
        }, function () {
            return void 0 === i && (i = t.apply(this, arguments)), i
        }),
        s = function (e) {
            var n = {};
            return function (e, o) {
                if ("function" == typeof e) return e();
                if (void 0 === n[e]) {
                    var t = function (e, n) {
                        return n ? n.querySelector(e) : document.querySelector(e)
                    }.call(this, e, o);
                    if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
                        t = t.contentDocument.head
                    } catch (e) {
                        t = null
                    }
                    n[e] = t
                }
                return n[e]
            }
        }(),
        c = null,
        l = 0,
        p = [],
        d = o(19);

    function u(e, n) {
        for (var o = 0; o < e.length; o++) {
            var t = e[o],
                i = a[t.id];
            if (i) {
                i.refs++;
                for (var r = 0; r < i.parts.length; r++) i.parts[r](t.parts[r]);
                for (; r < t.parts.length; r++) i.parts.push(h(t.parts[r], n))
            } else {
                var s = [];
                for (r = 0; r < t.parts.length; r++) s.push(h(t.parts[r], n));
                a[t.id] = {
                    id: t.id,
                    refs: 1,
                    parts: s
                }
            }
        }
    }

    function m(e, n) {
        for (var o = [], t = {}, i = 0; i < e.length; i++) {
            var a = e[i],
                r = n.base ? a[0] + n.base : a[0],
                s = {
                    css: a[1],
                    media: a[2],
                    sourceMap: a[3]
                };
            t[r] ? t[r].parts.push(s) : o.push(t[r] = {
                id: r,
                parts: [s]
            })
        }
        return o
    }

    function k(e, n) {
        var o = s(e.insertInto);
        if (!o) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var t = p[p.length - 1];
        if ("top" === e.insertAt) t ? t.nextSibling ? o.insertBefore(n, t.nextSibling) : o.appendChild(n) : o.insertBefore(n, o.firstChild), p.push(n);
        else if ("bottom" === e.insertAt) o.appendChild(n);
        else {
            if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var i = s(e.insertAt.before, o);
            o.insertBefore(n, i)
        }
    }

    function f(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var n = p.indexOf(e);
        n >= 0 && p.splice(n, 1)
    }

    function g(e) {
        var n = document.createElement("style");
        if (void 0 === e.attrs.type && (e.attrs.type = "text/css"), void 0 === e.attrs.nonce) {
            var t = function () {
                0;
                return o.nc
            }();
            t && (e.attrs.nonce = t)
        }
        return v(n, e.attrs), k(e, n), n
    }

    function v(e, n) {
        Object.keys(n).forEach(function (o) {
            e.setAttribute(o, n[o])
        })
    }

    function h(e, n) {
        var o, t, i, a;
        if (n.transform && e.css) {
            if (!(a = "function" == typeof n.transform ? n.transform(e.css) : n.transform.default(e.css))) return function () {};
            e.css = a
        }
        if (n.singleton) {
            var r = l++;
            o = c || (c = g(n)), t = y.bind(null, o, r, !1), i = y.bind(null, o, r, !0)
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (o = function (e) {
            var n = document.createElement("link");
            return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", v(n, e.attrs), k(e, n), n
        }(n), t = function (e, n, o) {
            var t = o.css,
                i = o.sourceMap,
                a = void 0 === n.convertToAbsoluteUrls && i;
            (n.convertToAbsoluteUrls || a) && (t = d(t));
            i && (t += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
            var r = new Blob([t], {
                    type: "text/css"
                }),
                s = e.href;
            e.href = URL.createObjectURL(r), s && URL.revokeObjectURL(s)
        }.bind(null, o, n), i = function () {
            f(o), o.href && URL.revokeObjectURL(o.href)
        }) : (o = g(n), t = function (e, n) {
            var o = n.css,
                t = n.media;
            t && e.setAttribute("media", t);
            if (e.styleSheet) e.styleSheet.cssText = o;
            else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(o))
            }
        }.bind(null, o), i = function () {
            f(o)
        });
        return t(e),
            function (n) {
                if (n) {
                    if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return;
                    t(e = n)
                } else i()
            }
    }
    e.exports = function (e, n) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (n = n || {}).attrs = "object" == typeof n.attrs ? n.attrs : {}, n.singleton || "boolean" == typeof n.singleton || (n.singleton = r()), n.insertInto || (n.insertInto = "head"), n.insertAt || (n.insertAt = "bottom");
        var o = m(e, n);
        return u(o, n),
            function (e) {
                for (var t = [], i = 0; i < o.length; i++) {
                    var r = o[i];
                    (s = a[r.id]).refs--, t.push(s)
                }
                e && u(m(e, n), n);
                for (i = 0; i < t.length; i++) {
                    var s;
                    if (0 === (s = t[i]).refs) {
                        for (var c = 0; c < s.parts.length; c++) s.parts[c]();
                        delete a[s.id]
                    }
                }
            }
    };
    var _, b = (_ = [], function (e, n) {
        return _[e] = n, _.filter(Boolean).join("\n")
    });

    function y(e, n, o, t) {
        var i = o ? "" : t.css;
        if (e.styleSheet) e.styleSheet.cssText = b(n, i);
        else {
            var a = document.createTextNode(i),
                r = e.childNodes;
            r[n] && e.removeChild(r[n]), r.length ? e.insertBefore(a, r[n]) : e.appendChild(a)
        }
    }
}, function (e) {
    e.exports = JSON.parse('{"dialog":{"active":"Active","always_active":"Always active","change_settings":"Change my preferences","find_out_more":"<p>To find out more, please visit our <a href=\'%s\' target=\'_blank\'>Cookies Policy</a>.</p>","i_agree_text":"I agree","inactive":"Inactive","ok_text":"OK","text":"We use cookies and other tracking technologies to improve your browsing experience on our website, to show you personalized content and targeted ads, to analyze our website traffic, and to understand where our visitors are coming from. By browsing our website, you consent to our use of cookies and other tracking technologies.<br/>","title":"We use cookies"},"level_functionality":{"content":"<p>These cookies are used to provide you with a more personalized experience on our website and to remember choices you make when you use our website.</p><p>For example, we may use functionality cookies to remember your language preferences or remember your login details.</p>","title":"Functionality cookies"},"level_strictly_necessary":{"content":"<p>These cookies are essential to provide you with services available through our website and to enable you to use certain features of our website.</p><p>Without these cookies, we cannot provide you certain services on our website.</p>","title":"Strictly necessary cookies"},"level_targeting":{"content":"<p>These cookies are used to show advertising that is likely to be of interest to you based on your browsing habits.</p><p>These cookies, as served by our content and/or advertising providers, may combine information they collected from our website with other information they have independently collected relating to your web browser\'s activities across their network of websites.</p><p>If you choose to remove or disable these targeting or advertising cookies, you will still see adverts but they may not be relevant to you.</p>","title":"Targeting and advertising cookies"},"level_tracking":{"content":"<p>These cookies are used to collect information to analyze the traffic to our website and how visitors are using our website.</p><p>For example, these cookies may track things such as how long you spend on the website or the pages you visit which helps us to understand how we can improve our website site for you.</p><p>The information collected through these tracking and performance cookies do not identify any individual visitor.</p>","title":"Tracking and performance cookies"},"preference_center":{"save":"Save my preferences","title":"Cookies Preferences Center"},"preference_center_menu_and_content":{"more_information_content":"<h1>More information</h1><p>For any queries in relation to our policy on cookies and your choices, please contact us.</p>","more_information_title":"More information","your_privacy_content":"<h1>Your privacy is important to us</h1>\\n<p>Cookies are very small text files that are stored on your computer when you visit a website. We use cookies for a variety of purposes and to enhance your online experience on our website (for example, to remember your account login details).</p><p>You can change your preferences and decline certain types of cookies to be stored on your computer while browsing our website. You can also remove any cookies already stored on your computer, but keep in mind that deleting cookies may prevent you from using parts of our website.</p>","your_privacy_title":"Your privacy"}}')
}, function (e) {
    e.exports = JSON.parse('{"dialog":{"active":"Aktiv","always_active":"Immer aktiv","change_settings":"Einstellungen Ã¤ndern","find_out_more":"<p>Details finden Sie in unserer <a href=\'%s\' target=\'_blank\'>DatenschutzerklÃ¤rung</a>.</p>","i_agree_text":"Alle akzeptieren","inactive":"Inaktiv","ok_text":"OK","text":"Diese Website verwendet Cookies und Targeting Technologien um Ihnen ein besseres Internet-Erlebnis zu ermÃ¶glichen und die Werbung, die Sie sehen, besser an Ihre BedÃ¼rfnisse anzupassen. Diese Technologien nutzen wir auÃŸerdem um Ergebnisse zu messen, um zu verstehen, woher unsere Besucher kommen oder um unsere Website weiter zu entwickeln. Durch das Surfen auf unserer Website stimmen Sie der Verwendung von Cookies und anderen Tracking-Technologien zu.<br/>","title":"Ihre PrivatsphÃ¤re ist uns wichtig"},"level_functionality":{"content":"<p>Diese Cookies werden verwendet, um Ihnen ein persönlicheres Erlebnis auf unserer Website zu bieten und um sich an die Entscheidungen zu erinnern, die Sie bei der Nutzung unserer Website getroffen haben.</p><p>Beispielsweise können wir Funktionscookies verwenden, um Ihre Spracheinstellungen oder Ihre Anmeldeinformationen zu speichern.</p>","title":"Funktions Cookies"},"level_strictly_necessary":{"content":"<p>Diese Cookies sind fÃ¼r die Bereitstellung von Diensten, die Ã¼ber unsere Website verfÃ¼gbar sind, und fÃ¼r die Verwendung bestimmter Funktionen unserer Website von wesentlicher Bedeutung.</p><p>Ohne diese Cookies können wir bestimmte Dienste auf unserer Website nicht bereitstellen.</p>","title":"Technisch notwendige Cookies"},"level_targeting":{"content":"<p>Diese Cookies werden verwendet, um Anzeigen anzuzeigen, die Sie aufgrund Ihrer Surfgewohnheiten wahrscheinlich interessieren.</p><p>Diese Cookies, die von unseren Inhalten und / oder Werbetreibenden bereitgestellt werden, können die Informationen, die sie von unserer Website gesammelt haben, mit anderen Informationen kombinieren, die sie durch die Aktivitäten ihres Webbrowsers in ihrem Website-Netzwerk gesammelt haben.</p><p>Wenn Sie diese Targeting- oder Werbe-Cookies löschen oder deaktivieren, werden Anzeigen geschaltet. Diese Sünde ist für dich nicht relevant.</p>","title":"Targeting und Werbung Cookies"},"level_tracking":{"content":"<p>Diese Cookies werden verwendet, um Informationen zu sammeln, um den Verkehr auf unserer Website und die Nutzung unserer Website durch Besucher zu analysieren.<p><p>Diese Cookies können beispielsweise verfolgen, wie lange Sie auf der Website bleiben oder welche Seiten Sie besuchen. Auf diese Weise können wir verstehen, wie wir unsere Website für Sie verbessern können.</p><p>Die durch diese Tracking- und Leistungscookies gesammelten Informationen identifizieren keinen einzelnen Besucher.</p>","title":"Tracking und Performance Cookies"},"preference_center":{"save":"Einstellungen speichern","title":"Cookie Einstellungen"},"preference_center_menu_and_content":{"more_information_content":"<h1>Mehr Informationen</h1><p>Wenn Sie Fragen zu unserer Verwendung von Cookies und Ihrer Privatsphäre haben, wenden Sie sich an uns.</p>","more_information_title":"Mehr Informationen","your_privacy_content":"<h1>Ihre Privatsphäre ist uns wichtig.</h1>\\n<p>Cookies sind sehr kleine Textdateien, die beim Besuch einer Website auf Ihrem Computer gespeichert werden. Wir verwenden Cookies für verschiedene Auswertungen, um Ihren Besuch auf unserer Website kontinuierlich zu verbessern (zum Beispiel, damit Ihre Anmeldedaten erhalten bleiben).</p><p>Sie können Ihre Einstellungen ändern und zulassen, dass verschiedene Arten von Cookies auf Ihrem Computer gespeichert werden, während Sie unsere Website besuchen. Sie können die auf Ihrem Computer gespeicherten Cookies auch stark löschen. Beachten Sie jedoch, dass einige Teile unserer Website möglicherweise nicht mehr bestimmungsgemäß verwendet werden.</p>","your_privacy_title":"Ihre PrivatsphÃ¤re"}}')
}, function (e) {
    e.exports = JSON.parse('{"dialog":{"active":"Actif","always_active":"Toujours activé","change_settings":"Changer mes prÃ©fÃ©rences","find_out_more":"<p>Pour en savoir plus, merci de consulter notre <a href=\'%s\' target=\'_blank\'>Politique sur les cookies</a>.</p>","i_agree_text":"J\'accepte","inactive":"Inactif","ok_text":"OK","text":"Nous utilisons des cookies et d\'autres technologies de suivi pour amÃ©liorer votre expÃ©rience de navigation sur notre site, pour vous montrer un contenu personnalisÃ© et des publicitÃ©s ciblÃ©es, pour analyser le trafic de notre site et pour comprendre la provenance de nos visiteurs. En naviguant sur notre site Web, vous consentez Ã  notre utilisation de cookies et d\'autres technologies de suivi.<br/>","title":"Nous utilisons des cookies"},"level_functionality":{"content":"<p>Ces cookies servent Ã  vous offrir une expÃ©rience plus personnalisÃ©e sur notre site Web et Ã  mÃ©moriser les choix que vous faites lorsque vous utilisez notre site Web.</p><p>Par exemple, nous pouvons utiliser des Cookies fonctionnels pour mÃ©moriser vos prÃ©fÃ©rences de langue ou vos identifiants de connexion.</p>","title":"Cookies fonctionnels"},"level_strictly_necessary":{"content":"<p>Ces cookies sont indispensables pour diffuser des services de quatre pages disponibles sur notre site Web et vous permettre d utiliser certaines fonctionnalités de notre site Web.</p><p>Sans ces cookies, nous ne pouvons pas vous fournir certains services sur notre site Web.</p>","title":"Cookies strictement nécessaires"},"level_targeting":{"content":"<p>Ces cookies sont utilisés à des fins publicitaires sensibles à votre intérêt pour la navigation dans vos habitudes de navigation.</p><p>Ces cookies, tels que servis par nos fournisseurs de contenu et / ou de publicitÃ©, peuvent associer des informations qu\'ils ont collectÃ©es sur notre site Web Ã  d\'autres informations qu\'ils ont collectÃ©es de maniÃ¨re indÃ©pendante et concernant les activitÃ©s du votre navigateur Web sur son rÃ©seau de sites Web.</p><p>Si vous choisissez de supprimer ou de dÃ©sactiver ces cookies de ciblage ou de publicitÃ©, vous verrez toujours des annonces, mais elles risquent de ne pas Ãªtre pertinentes.</p>","title":"Ciblage et de publicité cookies"},"level_tracking":{"content":"<p>Ces cookies sont utilisés pour collecter des autorisations d informations auprès de l analyste du South Notre Site et de Manner en visitant les Utilitaires du Site.</p><p>Par exemple, vous pouvez avoir à votre disposition des cookies que vous devez parcourir via le site Web ou les pages que vous visitez, qui incluront des commentaires nous pouvons améliorer notre site Web pour vous.</p><p>Les informations collectées via ces cookies de suivi et de performance n \ identifient aucun visitaur en particulier.</p>","title":"Cookies de suivi et de performance"},"preference_center":{"save":"Sauvegarder mes prÃ©fÃ©rences","title":"Zone de préférences des cookies"},"preference_center_menu_and_content":{"more_information_content":"<h1>Plus d\'information</h1><p>Pour toute question relative Ã  notre politique en matiÃ¨re de cookies et Ã  vos choix, veuillez nous contacter.</p>","more_information_title":"Plus d\'information","your_privacy_content":"<h1>Votre vie privée est importante pour nous</h1>\\n<p>Les cookies sont de très petits fichiers texte qui sont stockés sur votre ordinateur lorsque vous visitez un site Web. Nous utilisons des cookies à diverses fins et pour améliorer votre expérience en ligne sur notre site Web (par exemple, pour mémoriser les informations de connexion de votre compte).</p><p>Vous pouvez modifier vos préférences et refuser d enregistrer certains types de cookies sur votre ordinateur lorsque vous naviguez sur notre site. Vous pouvez configurer la suppression des cookies stockés sur votre ordinateur, mais gardez à l esprit que leur suppression peut vous permettre d éviter d utiliser des éléments de notre site Web.</p>","your_privacy_title":"Votre vie privée"}}')
}, function (e) {
    e.exports = JSON.parse('{"dialog":{"active":"Activo","always_active":"Siempre activo","change_settings":"Cambia mi preferencias","find_out_more":"<p>Para saber más, visita nuestra página sobre la <a href=\'%s\' target=\'_blank\'>PolÃ­tica de Cookies</a>, por favor.</p>","i_agree_text":"Estoy de acuerdo","inactive":"Inactivo","ok_text":"OK","text":"Usamos cookies y otras técnicas de rastreo para mejorar tu experiencia de navegación en nuestra web, para mostrarte contenidos personalizados y anuncios adecuados, para analizar el tráfico en nuestra web y para comprender de donde llegan nuestros visitantes. Navegando en nuestra web tu aceptas el uso de cookies y de otras tecnicas de rastreo.<br/>","title":"Utilizamos cookies"},"level_functionality":{"content":"<p>Estos cookies son utilizados para proveerte una experiencia más personalizada en nuestra web y para recordar tus elecciones en nuestro sitio web.</p><p>Por ejemplo, podemos utilizar cookies de funcionalidad para recordar tus preferencias de idioma o tus detalles de acceso.</p>","title":"Cookies de funcionalidad"},"level_strictly_necessary":{"content":"<p>Estos cookies son esenciales para proveerte los servicios disponibles en nuestra web y para permitirte utilizar algunas características de nuestra web.</p><p>Sin estos cookies, no podemos proveer algunos servicios de nuestro sitio web.</p>","title":"Cookies estrictamente necesarias"},"level_targeting":{"content":"<p>Estos cookies son utilizados para enseñarte anuncios que pueden ser interesantes sobre la base de tus costumbres de navegación.</p><p>Estos cookies, son servidos por nuestros proveedores de contenido y/o de publicidad, puede combinar la información que ellos recogieron de nuestro sitio web con otra información recopilada por ellos en relación con las actividades de su navegador web a través de su red de sitios web.</p><p>Si tu eliges cancelar o inhabilitar los cookies de seguimiento y publicidad, seguirás viendo anuncios pero estos podrían no ser de tu interés.</p>","title":"Cookies de seguimiento y publicidad"},"level_tracking":{"content":"<p>Estos cookies  son utilizados para recopilar información, para analizar el tráfico en nuestra web y la forma en que los usuarios utilizan y navegan en nuestra web.</p><p>Por ejemplo, estos cookies pueden recopilar datos de cuanto tiempo llevas navegado en nuestro sitio web o que páginas visitas, cosa que nos ayuda a comprender cómo podemos mejorar nuestra web para ti.</p><p>La información recopilada con estos cookies de rastreo y rendimiento no identifican a ningún visitante individual.</p>","title":"Cookies de rastreo y rendimiento"},"preference_center":{"save":"Guardar mi preferencias","title":"Centro de Preferencias de Cookies"},"preference_center_menu_and_content":{"more_information_content":"<h1>Más información</h1><p>Para cualquier pregunta en relación con nuestra política de cookies y tus preferencias, contacta con nosotros, por favor.</p>","more_information_title":"Más información","your_privacy_content":"<h1>Tu privacidad es importante para nosotros</h1>\\n<p>Los cookies son  archivos muy pequeños de texto almacenados en tu ordenador cuando visitas nuestra web. Utilizamos cookies para diferentes objetivos y para mejorar tu experiencia en línea en nuestro sitio web (por ejemplo, para recordar tus detalles de acceso).</p><p>Puedes cambiar tus preferencias y rechazar que algunos tipos de cookies sean almacenados en tu ordenador mientras estás navegando en nuestra web. Puedes también cancelar cualquier cookie ya almacenado en tu ordenador, pero recuerda que cancelar los cookies puede impedirte utilizar algunas partes de nuestra web.</p>","your_privacy_title":"Tu privacidad"}}')
}, function (e) {
    e.exports = JSON.parse('{"dialog":{"active":"Attivo","always_active":"Sempre attivo","change_settings":"Cambia le mie impostazioni","find_out_more":"<p>Per saperne di piÃ¹, visita per favore la nostra pagina sulla <a href=\'%s\' target=\'_blank\'>Politica dei Cookies</a>.</p>","i_agree_text":"Accetto","inactive":"Inattivo","ok_text":"OK","text":"Noi usiamo i cookies e altre tecniche di tracciamento per migliorare la tua esperienza di navigazione nel nostro sito, per mostrarti contenuti personalizzati e annunci mirati, per analizzare il traffico sul nostro sito, e per capire da dove arrivano i nostri visitatori. Navigando nel nostro sito web, tu accetti il nostro utilizzo dei cookies e di altre tecniche di tracciamento.<br/>","title":"Noi usiamo i cookies"},"level_functionality":{"content":"<p>Questi cookies sono utilizzati per offrirti unâ€™esperienza piÃ¹ personalizzata nel nostro sito e per ricordare le scelte che hai fatto mentre usavi il nostro sito.</p><p>Per esempio, possiamo usare cookies funzionali per memorizzare le tue preferenze sulla lingua o i tuoi dettagli di accesso.</p>","title":"Cookies funzionali"},"level_strictly_necessary":{"content":"<p>Questi cookies sono essenziali per fornirti i servizi disponibili nel nostro sito e per renderti disponibili alcune funzionalitÃ  del nostro sito web.</p><p>Senza questi cookies, non possiamo fornirti alcuni servizi del nostro sito.</p>","title":"Cookies strettamente necessari"},"level_targeting":{"content":"<p>Questi cookies sono usati per mostrare annunci pubblicitari che possano verosimilmente essere di tuo interesse in base alle tue abitudini di navigazione.</p><p>Questi cookies, cosÃ­ come forniti dai nostri fornitori di  contenuti o annunci pubblicitari, possono combinare le informazioni che raccolgono dal nostro sito web con quelle che hanno indipendentemente raccolto in relazione allâ€™attivitÃ  del tuo browser attraverso la loro rete di siti web.</p><p>Se scegli di rimuovere o disabilitare questo tipo di cookies di targeting e pubblicitÃ , vedrai ancora annunci pubblicitari ma potrebbero essere irrilevanti per te.</p>","title":"Cookies di targeting e pubblicitÃ "},"level_tracking":{"content":"<p>Questi cookies sono utilizzati per raccogliere informazioni per analizzare il traffico verso il nostro sito e il modo in cui i visitatori utilizzano il nostro sito.</p><p>Per esempio, questi cookies possono tracciare cose come quanto a lungo ti fermi nel nostro sito o le pagine che visiti, cosa che ci aiuta a capire come possiamo migliorare il nostro sito per te.</p><p>Le informazioni raccolte attraverso questi cookies di tracciamento e performance non identificano alcun visitatore individuale.</p>","title":"Cookies di tracciamento e prestazione"},"preference_center":{"save":"Salva le mie impostazioni","title":"Centro Preferenze sui Cookies"},"preference_center_menu_and_content":{"more_information_content":"<h1>PiÃ¹ informazioni</h1><p>Per qualsiasi domanda relativa alla nostra politica sui cookies e le tue scelte, per favore contattaci.</p>","more_information_title":"PiÃ¹ informazioni","your_privacy_content":"<h1>La tua privacy Ã¨ importante per noi</h1>\\n<p>I cookies sono dei piccolissimi file di testo che vengono memorizzati nel tuo computer quando visiti un sito web. Noi usiamo i cookies per una varietÃ  di scopi e per migliorare la tua esperienza online nel nostro sito web (per esempio, per ricordare i tuoi dettagli di accesso).</p><p>Tu puoi cambiare le tue impostazioni e rifiutare che alcuni tipi di cookies vengano memorizzati sul tuo computer mentre stai navigando nel nostro sito web. Puoi anche rimuovere qualsiasi cookie giÃ  memorizzato nel tuo computer, ma ricorda che cancellare i cookies puÃ² impedirti di utilizzare alcune parti del nostro sito.</p>","your_privacy_title":"La tua privacy"}}')
}, function (e) {
    e.exports = JSON.parse('{"dialog":{"active":"Ativo","always_active":"Sempre ativo","change_settings":"Alterar as minhas preferÃªncias","find_out_more":"<p>Para obter mais detalhes, por favor consulte a nossa<a href=\'%s\' target=\'_blank\'>PolÃ­tica de Cookies</a>.</p>","i_agree_text":"Concordo","inactive":"Inativo","ok_text":"OK","text":"Utilizamos cookies e outras tecnologias de mediÃ§Ã£o para melhorar a sua experiÃªncia de navegaÃ§Ã£o no nosso site, de forma a mostrar conteÃºdo personalizado, anÃºncios direcionados, analisar o trÃ¡fego do site e entender de onde vÃªm os visitantes. Ao navegar no nosso site, concorda com o uso de cookies e outras tecnologias de mediÃ§Ã£o.<br/>","title":"O nosso site usa cookies"},"level_functionality":{"content":"<p>Estes cookies sÃ£o usados â€‹â€‹para fornecer uma experiÃªncia mais personalizada no nosso site e para lembrar as escolhas que faz ao usar o nosso site.</p><p>Por exemplo, podemos usar cookies de funcionalidade para se lembrar das suas preferÃªncias de idioma e/ ou os seus detalhes de login.</p>","title":"Cookies de funcionalidade"},"level_strictly_necessary":{"content":"<p>Estes cookies sÃ£o essenciais para fornecer serviÃ§os disponÃ­veis no nosso site e permitir que possa usar determinados recursos no nosso site.</p><p>Sem estes cookies, nÃ£o podemos fornecer certos serviÃ§os no nosso site.</p>","title":"Cookies estritamente necessÃ¡rios"},"level_targeting":{"content":"<p>Estes cookies sÃ£o usados â€‹â€‹para mostrar publicidade que provavelmente lhe pode interessar com base nos seus hÃ¡bitos e comportamentos de navegaÃ§Ã£o.</p><p>Estes cookies, servidos pelo nosso conteÃºdo e/ ou fornecedores de publicidade, podem combinar as informaÃ§Ãµes coletadas no nosso site com outras informaÃ§Ãµes coletadas independentemente relacionadas com as atividades na rede de sites do seu navegador.</p><p>Se optar por remover ou desativar estes cookies de segmentaÃ§Ã£o ou publicidade, ainda verÃ¡ anÃºncios, mas estes poderÃ£o nÃ£o ser relevantes para si.</p>","title":"Cookies de segmentaÃ§Ã£o e publicidade"},"level_tracking":{"content":"<p>Estes cookies sÃ£o usados â€‹â€‹para coletar informaÃ§Ãµes para analisar o trÃ¡fego no nosso site e entender como Ã© que os visitantes estÃ£o a usar o nosso site.</p><p>Por exemplo, estes cookies podem medir fatores como o tempo despendido no site ou as pÃ¡ginas visitadas, isto vai permitir entender como podemos melhorar o nosso site para os utilizadores.</p><p>As informaÃ§Ãµes coletadas por meio destes cookies de mediÃ§Ã£o e desempenho nÃ£o identificam nenhum visitante individual.</p>","title":"Cookies de mediÃ§Ã£o e desempenho"},"preference_center":{"save":"Guardar as minhas preferÃªncias","title":"Centro de preferÃªncias de cookies"},"preference_center_menu_and_content":{"more_information_content":"<h1>Mais InformaÃ§Ãµes</h1><p>Para qualquer dÃºvida sobre a nossa polÃ­tica de cookies e as suas opÃ§Ãµes, entre em contato connosco.</p>","more_information_title":"Mais InformaÃ§Ãµes","your_privacy_content":"<h1>A sua privacidade Ã© importante para nÃ³s.</h1>\\n<p>Cookies sÃ£o pequenos arquivos de texto que sÃ£o armazenados no seu computador quando visita um site. Utilizamos cookies para diversos fins e para aprimorar sua experiÃªncia no nosso site (por exemplo, para se lembrar dos detalhes de login da sua conta).</p><p>Pode alterar as suas preferÃªncias e recusar o armazenamento de certos tipos de cookies no seu computador enquanto navega no nosso site. Pode tambÃ©m remover todos os cookies jÃ¡ armazenados no seu computador, mas lembre-se de que a exclusÃ£o de cookies pode impedir o uso de determinadas Ã¡reas no nosso site.</p>","your_privacy_title":"A sua privacidade"}}')
}, function (e) {
    e.exports = JSON.parse('{"dialog":{"active":"AktÃ­v","always_active":"Mindig aktÃ­v","change_settings":"BeÃ¡llÃ­tÃ¡sok megvÃ¡ltoztatÃ¡sa","find_out_more":"<p>Ha tÃ¶bbet szeretne megtudni, kÃ©rjÃ¼k, keresse fel a <a href=\'%s\' target=\'_blank\'>sÃ¼tikre vonatkozÃ³ irÃ¡nyelveinket</a>.</p>","i_agree_text":"Elfogadom","inactive":"InaktÃ­v","ok_text":"OK","text":"Az oldal sÃ¼tiket Ã©s egyÃ©b nyomkÃ¶vetÅ‘ technolÃ³giÃ¡kat alkalmaz, hogy javÃ­tsa a bÃ¶ngÃ©szÃ©si Ã©lmÃ©nyÃ©t, azzal hogy szemÃ©lyre szabott tartalmakat Ã©s cÃ©lzott hirdetÃ©seket jelenÃ­t meg, Ã©s elemzi a weboldalunk forgalmÃ¡t, hogy megtudjuk honnan Ã©rkeztek a lÃ¡togatÃ³ink. Weboldalunk bÃ¶ngÃ©szÃ©sÃ©vel hozzÃ¡jÃ¡rul a sÃ¼tik Ã©s mÃ¡s nyomkÃ¶vetÅ‘ technolÃ³giÃ¡k hasznÃ¡latÃ¡hoz.<br/>","title":"Az oldal sÃ¼tiket hasznÃ¡l"},"level_functionality":{"content":"<p>Ezeket a sÃ¼tiket arra hasznÃ¡ljuk, hogy szemÃ©lyre szabottabb Ã©lmÃ©nyt nyÃºjtsunk weboldalunkon, Ã©s hogy az oldal rÃ¶gzÃ­tse a webhelyÃ¼nk hasznÃ¡lata sorÃ¡n tett dÃ¶ntÃ©seket.</p><p>PÃ©ldÃ¡ul arra hasznÃ¡lhatunk funkcionÃ¡lis sÃ¼tiket, hogy emlÃ©kezzÃ¼nk a nyelvi beÃ¡llÃ­tÃ¡sokra, vagy a bejelentkezÃ©si adataira.</p>","title":"FunkcionÃ¡lis sÃ¼tik"},"level_strictly_necessary":{"content":"<p>Ezek a sÃ¼tik elengedhetetlenek a weboldalunkon elÃ©rhetÅ‘ szolgÃ¡ltatÃ¡sok nyÃºjtÃ¡sÃ¡hoz, valamint weboldalunk bizonyos funkciÃ³inak hasznÃ¡latÃ¡hoz.</p><p>A feltÃ©tlenÃ¼l szÃ¼ksÃ©ges sÃ¼tik hasznÃ¡lata nÃ©lkÃ¼l weboldalunkon nem tudunk bizonyos szolgÃ¡ltatÃ¡sokat nyÃºjtani Ã–nnek.</p>","title":"FeltÃ©tlenÃ¼l szÃ¼ksÃ©ges sÃ¼tik"},"level_targeting":{"content":"<p>Ezeket a sÃ¼tiket olyan hirdetÃ©sek megjelenÃ­tÃ©sÃ©re hasznÃ¡ljuk, amelyek valÃ³szÃ­nÅ±leg Ã©rdekli Ã–nt a bÃ¶ngÃ©szÃ©si szokÃ¡sai alapjÃ¡n.</p><p>Ezek a sÃ¼tik, amelyeket a tartalom Ã©s / vagy a reklÃ¡mszolgÃ¡ltatÃ³k szolgÃ¡ltatnak, egyesÃ­thetik a weboldalunktÃ³l gyÅ±jtÃ¶tt informÃ¡ciÃ³kat mÃ¡s informÃ¡ciÃ³kkal, amelyeket Ã¶nÃ¡llÃ³an Ã¶sszegyÅ±jtÃ¶ttek az Ã–n bÃ¶ngÃ©szÅ‘jÃ©nek tevÃ©kenysÃ©geivel kapcsolatban a webhely-hÃ¡lÃ³zaton keresztÃ¼l.</p><p>Ha Ã–n Ãºgy dÃ¶nt, hogy eltÃ¡volÃ­tja vagy letiltja ezeket a cÃ©lirÃ¡nyos vagy hirdetÃ©si sÃ¼tiket, akkor is lÃ¡tni fogja a hirdetÃ©seket, de lehet, hogy nem lesznek relevÃ¡nsak az Ã–n szÃ¡mÃ¡ra.</p>","title":"CÃ©lirÃ¡nyos Ã©s hirdetÃ©si sÃ¼tik"},"level_tracking":{"content":"<p>Ezeket a sÃ¼tiket arra hasznÃ¡ljuk, hogy informÃ¡ciÃ³kat gyÅ±jtsÃ¼nk weboldalunk forgalmÃ¡rÃ³l Ã©s lÃ¡togatÃ³irÃ³l, webhelyÃ¼nk hasznÃ¡latÃ¡nak elemzÃ©sÃ©hez.</p><p>PÃ©ldÃ¡ul ezek a sÃ¼tik nyomon kÃ¶vethetik a webhelyen tÃ¶ltÃ¶tt idÅ‘t vagy a meglÃ¡togatott oldalakat, amely segÃ­t megÃ©rteni, hogyan javÃ­thatjuk webhelyÃ¼nket az Ã–n nagyobb megelÃ©gedettsÃ©gÃ©re.</p><p>Ezekkel a nyomkÃ¶vetÅ‘ Ã©s teljesÃ­tmÃ©nnyel kapcsolatos sÃ¼tikkel Ã¶sszegyÅ±jtÃ¶tt informÃ¡ciÃ³k egyetlen szemÃ©lyt sem azonosÃ­tanak.</p>","title":"KÃ¶vetÃ©si Ã©s teljesÃ­tmÃ©nnyel kapcsolatos sÃ¼tik"},"preference_center":{"save":"BeÃ¡llÃ­tÃ¡sok mentÃ©se","title":"SÃ¼tikre beÃ¡llÃ­tÃ¡si kÃ¶zpont"},"preference_center_menu_and_content":{"more_information_content":"<h1>EgyÃ©b informÃ¡ciÃ³k</h1><p>A sÃ¼tikre vonatkozÃ³ irÃ¡nyelveinkkel Ã©s az Ã–n vÃ¡lasztÃ¡sÃ¡val kapcsolatosan felmerÃ¼lÅ‘ bÃ¡rmilyen kÃ©rdÃ©sÃ©vel keressen meg bennÃ¼nket.</p>","more_information_title":"EgyÃ©b informÃ¡ciÃ³k","your_privacy_content":"<h1>Az Ã¶n adatainak vÃ©delem fontos szÃ¡munkra</h1>\\n<p>A sÃ¼tik egÃ©szen kicsi szÃ¶veges fÃ¡jlok, amelyeket a szÃ¡mÃ­tÃ³gÃ©pÃ©n tÃ¡rolnak, amikor meglÃ¡togat egy weboldalt. SÃ¼tiket hasznÃ¡lunk kÃ¼lÃ¶nfÃ©le cÃ©lokra, Ã©s weboldalunkon az online Ã©lmÃ©ny fokozÃ¡sa Ã©rdekÃ©ben (pÃ©ldÃ¡ul a fiÃ³kjÃ¡nak bejelentkezÃ©si adatainak megjegyzÃ©sÃ©re).</p><p>WebhelyÃ¼nk bÃ¶ngÃ©szÃ©se kÃ¶zben megvÃ¡ltoztathatja a beÃ¡llÃ­tÃ¡sait, Ã©s elutasÃ­thatja a szÃ¡mÃ­tÃ³gÃ©pÃ©n tÃ¡rolni kÃ­vÃ¡nt bizonyos tÃ­pusÃº sÃ¼tik hasznÃ¡latÃ¡t. A szÃ¡mÃ­tÃ³gÃ©pen mÃ¡r tÃ¡rolt sÃ¼tiket eltÃ¡volÃ­thatja, de ne feledje, hogy a sÃ¼tik tÃ¶rlÃ©se megakadÃ¡lyozhatja weboldalunk egyes rÃ©szeinek hasznÃ¡latÃ¡t.</p>","your_privacy_title":"Az Ã¶n adatai vÃ©delme"}}')
}, function (e) {
    e.exports = JSON.parse('{"dialog":{"active":"Aktivno","always_active":"Uvijek aktivno","change_settings":"Promjeni moje postavke","find_out_more":"<p>Da bi saznali viÅ¡e, posjetite naÅ¡a <a href=\'%s\' target=\'_blank\'>Pravila o kolaÄiÄ‡ima</a>.</p>","i_agree_text":"SlaÅ¾em se","inactive":"Neaktivno","ok_text":"OK","text":"Koristimo kolaÄiÄ‡e i druge tehnologije praÄ‡enja da bismo poboljÅ¡ali vaÅ¡e korisniÄko iskustvo na naÅ¡oj web stranici, kako bismo vam prikazali personalizirani sadrÅ¾aj i ciljane oglase, analizirali promet na naÅ¡oj web stranici i razumjeli odakle dolaze naÅ¡i posjetitelji. Pregledavanjem naÅ¡e web stranice pristajete na naÅ¡u upotrebu kolaÄiÄ‡a i drugih tehnologija praÄ‡enja.<br/>","title":"Mi koristimo kolaÄiÄ‡e"},"level_functionality":{"content":"<p>Ovi se kolaÄiÄ‡i koriste kako bi vam pruÅ¾ili personalizirano korisniÄko iskustvo na naÅ¡oj web stranici i za pamÄ‡enje izbora koje napravite kada koristite naÅ¡u web stranicu.</p><p>Na primjer, moÅ¾emo koristiti kolaÄiÄ‡e funkcionalnosti da bismo zapamtili vaÅ¡e jeziÄne postavke ili upamtili vaÅ¡e podatke za prijavu.</p>","title":"KolaÄiÄ‡i funkcionalnosti"},"level_strictly_necessary":{"content":"<p>Ovi su kolaÄiÄ‡i neophodni za pruÅ¾anje usluga dostupnih putem naÅ¡e web stranice i omoguÄ‡avanje koriÅ¡tenja odreÄ‘enih znaÄajki naÅ¡e web stranice.</p><p>Bez ovih kolaÄiÄ‡a ne moÅ¾emo vam pruÅ¾iti odreÄ‘ene usluge na naÅ¡oj web stranici.</p>","title":"Strogo potrebni kolaÄiÄ‡i"},"level_targeting":{"content":"<p>Ovi se kolaÄiÄ‡i koriste za prikazivanje oglasa koji bi vas mogli zanimati na temelju vaÅ¡ih navika pregledavanja web stranica.</p><p>Ovi kolaÄiÄ‡i, posluÅ¾eni od naÅ¡ih pruÅ¾atelja sadrÅ¾aja i / ili oglaÅ¡avanja, mogu kombinirati podatke koje su prikupili s naÅ¡e web stranice s drugim podacima koje su neovisno prikupili, a odnose se na aktivnosti vaÅ¡eg web preglednika kroz njihovu mreÅ¾u web stranica.</p><p>Ako odluÄite ukloniti ili onemoguÄ‡iti ove kolaÄiÄ‡e za ciljano oglaÅ¡avanje, i dalje Ä‡ete vidjeti oglase, ali oni moÅ¾da nisu relevantni za vas.</p>","title":"KolaÄiÄ‡i za ciljano oglaÅ¡avanje"},"level_tracking":{"content":"<p>Ovi se kolaÄiÄ‡i koriste za prikupljanje podataka za analizu prometa na naÅ¡oj web stranici i za informaciju kako posjetitelji koriste naÅ¡u web stranicu.</p><p>Na primjer, ti kolaÄiÄ‡i mogu pratiti stvari poput dugovanja na web stranici ili stranicama koje posjetite Å¡to nam pomaÅ¾e da shvatimo kako moÅ¾emo poboljÅ¡ati vaÅ¡e korisniÄko iskustvo na naÅ¡oj web stranici.</p><p>Informacije prikupljene ovim praÄ‡enjem i kolaÄiÄ‡i izvedbe ne identificiraju nijednog pojedinaÄnog posjetitelja.</p>","title":"KolaÄiÄ‡i za praÄ‡enje i performanse"},"preference_center":{"save":"Spremi moje postavke","title":"Centar za postavke kolaÄiÄ‡a"},"preference_center_menu_and_content":{"more_information_content":"<h1>ViÅ¡e informacija</h1><p>Za sve upite vezane uz naÅ¡a pravila o kolaÄiÄ‡ima i vaÅ¡im izborima, molimo da nas kontaktirate.</p>","more_information_title":"ViÅ¡e informacija","your_privacy_content":"<h1>VaÅ¡a privatnost nam je vaÅ¾na</h1>\\n<p>KolaÄiÄ‡i su vrlo male tekstualne datoteke koje se pohranjuju na vaÅ¡em raÄunalu kada posjetite web stranicu. Mi koristimo kolaÄiÄ‡e za razliÄite svrhe i za poboljÅ¡anje vaÅ¡eg mreÅ¾nog iskustva na naÅ¡oj web stranici (na primjer, za pamÄ‡enje podataka za prijavu na vaÅ¡ korisniÄki raÄun).</p><p>MoÅ¾ete promijeniti svoje postavke i odbiti odreÄ‘ene vrste kolaÄiÄ‡a koji Ä‡e se pohraniti na vaÅ¡em raÄunalu tijekom pregledavanja naÅ¡e web stranice. TakoÄ‘er moÅ¾ete ukloniti sve kolaÄiÄ‡e koji su veÄ‡ pohranjeni na vaÅ¡em raÄunalu, ali imajte na umu da vas brisanje kolaÄiÄ‡a moÅ¾e sprijeÄiti da koristite dijelove naÅ¡e web stranice.</p>","your_privacy_title":"VaÅ¡a privatnost"}}')
}, function (e) {
    e.exports = JSON.parse('{"dialog":{"active":"Aktiv","always_active":"Altid aktiv","change_settings":"Skift indstillinger","find_out_more":"<p>For at finde ud af mere, sÃ¥ lÃ¦s venligst vores <a href=\'%s\' target=\'_blank\'>Cookie politik</a>.</p>","i_agree_text":"Jeg accepterer","inactive":"Inaktiv","ok_text":"OK","text":"Vi bruger cookies og andre tracking teknologier for at forbedre din oplevelse pÃ¥ vores website, til at vise personaliseret indhold, mÃ¥lrettede annoncer og til at forstÃ¥ hvor vores besÃ¸gende kommer fra. Du samtykker til brugen af vores cookies og andre tracking teknologier hvis du fortsÃ¦tter med at bruge vores website.\\n<br/>","title":"Vi bruger cookies"},"level_functionality":{"content":"<p>Disse cookies anvendes for at kunne give dig en personaliseret oplevelse af vores hjemmeside, og for at kunne huske valg du har truffet.</p><p>Eksempelvis kan vi bruge funktions cookies til at huske sprog-indstillinger eller dine login informationer.</p>","title":"Funktions cookies"},"level_strictly_necessary":{"content":"<p>Disse Cookies er essentielle for at du kan bruge vores hjemmeside.</p><p>Uden disse cookies kan vi ikke garantere vores hjemmeside virker ordentligt.</p>","title":"NÃ¸dvendige cookies"},"level_targeting":{"content":"<p>Disse cookies anvendes for at kunne vise annoncer, som sandsynligvis er interessante for dig, baseret pÃ¥ dine browser profil.</p><p>Disse cookies, som sÃ¦ttes af vores indhold og/eller annoncepartnere, kan kombinere information fra flere hjemmesider i hele det netvÃ¦rk som partnerne styrer.</p><p>Hvis du deaktiverer denne indstilling vil du fortsat se reklamer, men de vil ikke lÃ¦ngere vÃ¦re mÃ¥lrettet til dig.</p>","title":"MÃ¥lretning og annoncecookies"},"level_tracking":{"content":"<p>Disse cookies anvendes til at analysere besÃ¸g pÃ¥ vores hjemmeside, og hvordan du bruger vores hjemmeside.</p><p>Eksempelvis kan vi tracke hvor lang tid du bruger hjemmesiden, eller hvilke sider du kigger pÃ¥. Det hjÃ¦lper os til at forstÃ¥ hvordan vi kan forbedre hjemmesiden.</p><p>Informationerne kan ikke identificere dig som individ og er derfor anonyme.</p>","title":"Tracking og performance cookies"},"preference_center":{"save":"Gem mine indstillinger","title":"Cookie indstillinger"},"preference_center_menu_and_content":{"more_information_content":"<h1>Mere information</h1><p>Har du spÃ¸rgsmÃ¥l vedr. vores cookiepolitik og dine valgmuligheder, sÃ¥ kontakt os venligst.</p>","more_information_title":"Mere information","your_privacy_content":"<h1>Dit privatliv er vigtigt for os</h1>\\n<p>Cookies er en lille tekstfil, som gemmes pÃ¥ din computer, nÃ¥r du besÃ¸ger et website. Vi bruger cookies til en rÃ¦kke formÃ¥l, og for at forbedre din oplevelse pÃ¥ vores website (eksempelvis for at huske dine login oplysninger).</p><p>Du kan Ã¦ndre dine indstillinger og afvise forskellige typer cookies, som gemmes pÃ¥ din computer, nÃ¥r du besÃ¸ger vores website. Du kan ogsÃ¥ fjerne cookies som allerede er gemt pÃ¥ din computer, men bemÃ¦rk venligst at sletning af cookies kan betyde der er dele af hjemmesiden som ikke virker.</p>","your_privacy_title":"Dit privatliv"}}')
}, function (e) {
    e.exports = JSON.parse('{"dialog":{"active":"Active","always_active":"ÃŽntotdeauna active","change_settings":"Vreau sÄƒ schimb setÄƒrile","find_out_more":"<p>Pentru a afla mai multe, te rugÄƒm sÄƒ citeÈ™ti <a href=\'%s\' target=\'_blank\'>Politica noastrÄƒ de Cookie-uri</a>.</p>","i_agree_text":"Sunt de acord","inactive":"Inactive","ok_text":"OK","text":"Folosim cookie-uri È™i alte tehnologii de urmÄƒrire pentru a Ã®mbunÄƒtÄƒÈ›i experienÈ›a ta de navigare pe website-ul nostru, pentru afiÈ™a conÈ›inut È™i reclame personalizate, pentru a analiza traficul de pe website-ul nostru È™i pentru a Ã®nÈ›elege de unde vin vizitatorii noÈ™tri. NavigÃ¢nd pe website-ul nostru, eÈ™ti de acord cu utilizarea cookie-urilor, cÃ¢t È™i a altor metode de urmÄƒrire folosite.<br/>","title":"Folosim cookie-uri"},"level_functionality":{"content":"<p>Aceste cookie-uri sunt folosite pentru a-È›i asigura o experienÈ›Äƒ personalizatÄƒ pe website-ul nostru È™i pentru salvarea alegerilor pe care le faci cÃ¢nd foloseÈ™ti website-ul nostru.</p><p>De exemplu, putem folosi cookie-uri funcÈ›ionale pentru a salva preferinÈ›ele tale legate de limba website-ului nostru sau datele de logare.</p>","title":"Cookie-uri funcÈ›ionale"},"level_strictly_necessary":{"content":"<p>Aceste cookie-uri sunt esenÈ›iale pentru a putea beneficia de serviciile disponibile pe website-ul nostru.</p><p>FÄƒrÄƒ aceste cookie-uri nu poÈ›i folosi anumite funcÈ›ionalitÄƒÈ›i ale website-ului nostru.</p>","title":"Cookie-uri strict necesare"},"level_targeting":{"content":"<p>Aceste cookie-uri sunt folosite pentru a-È›i afiÈ™a reclame cÃ¢t mai pe interesul tÄƒu, Ã®n funcÈ›ie de obiceiurile tale de navigare.</p><p>Aceste cookie-uri, aÈ™a cum sunt afiÈ™ate de furnizori noÈ™tri de conÈ›inut È™i/sau publicitate, pot combina informaÈ›ii de pe website-ul nostru cu alte informaÈ›ii pe care furnizori noÈ™tri le-au colectat Ã®n mod independent cu privire la activitatea ta Ã®n reÈ›eaua lor de website-uri.</p><p>DacÄƒ alegi sÄƒ È™tergi sau sÄƒ dezactivezi aceste cookie-uri tot vei vedea reclame, dar se poate ca aceste reclame sÄƒ nu fie relevante pentru tine.</p>","title":"Cookie-uri pentru marketing È™i publicitate"},"level_tracking":{"content":"<p>Acest tip de cookie-uri sunt folosite pentru a colecta informaÈ›ii Ã®n vederea analizÄƒrii traficului pe website-ul nostru È™i modul Ã®n care vizitatorii noÈ™tri folosesc website-ul.</p><p>De exemplu, aceste cookie-uri pot urmÄƒri cÃ¢t timp petreci pe website sau paginile pe care le vizitezi, ceea ce ne ajutÄƒ sÄƒ Ã®nÈ›elegem cum putem Ã®mbunÄƒtÄƒÈ›i website-ul pentru tine.</p><p>InformaÈ›iile astfel colectate nu identificÄƒ individual vizitatorii.</p>","title":"Cookie-uri de analizÄƒ È™i performanÈ›Äƒ"},"preference_center":{"save":"SalveazÄƒ","title":"PreferinÈ›e pentru Cookie-uri"},"preference_center_menu_and_content":{"more_information_content":"<h1>Mai multe informaÈ›ii</h1><p>Pentru mai multe informaÈ›ii cu privire la politica noastrÄƒ de cookie-uri È™i preferinÈ›ele tale, te rugÄƒm sÄƒ ne contactezi.</p>","more_information_title":"Mai multe informaÈ›ii","your_privacy_content":"<h1>ConfidenÈ›ialitatea ta este importantÄƒ pentru noi</h1>\\n<p>Cookie-urile sunt fiÈ™iere text foarte mici ce sunt salvate Ã®n browser-ul tÄƒu atunci cÃ¢nd vizitezi un website. Folosim cookie-uri pentru mai multe scopuri, dar È™i pentru a Ã®È›i oferi cea mai bunÄƒ experienÈ›Äƒ de utilizare posibilÄƒ (de exemplu, sÄƒ reÈ›inem datele tale de logare Ã®n cont).</p><p>ÃŽÈ›i poÈ›i modifica preferinÈ›ele È™i poÈ›i refuza ca anumite tipuri de cookie-uri sÄƒ nu fie salvate Ã®n browser Ã®n timp ce navigezi pe website-ul nostru. Deasemenea poÈ›i È™terge cookie-urile salvate deja Ã®n browser, dar reÈ›ine cÄƒ este posibil sÄƒ nu poÈ›i folosi anumite pÄƒrÈ›i ale website-ul nostru Ã®n acest caz.</p>","your_privacy_title":"ConfidenÈ›ialitatea ta"}}')
}, function (e) {
    e.exports = JSON.parse('{"dialog":{"active":"Aktivni","always_active":"Vedno aktivni","change_settings":"Spremeni moje nastavitve","find_out_more":"<p>Za veÄ informacij si prosim oglejte naÅ¡ <a href=\'%s\' target=\'_blank\'>Pravilnik o piÅ¡kotkih</a>.</p>","i_agree_text":"Se strinjam","inactive":"Neaktivni","ok_text":"V redu","text":"PiÅ¡kotke in druge sledilne tehnologije uporabljamo za izboljÅ¡anje vaÅ¡e uporabniÅ¡ke izkuÅ¡nje med brskanjem po naÅ¡i spletni strani, za  prikazovanje personaliziranih vsebin oz. targetiranih oglasov, za analizo obiskov naÅ¡e spletne strani in za vpogled v to, iz kje prihajajo naÅ¡i gostje. Z brskanjem po naÅ¡i spletni strani soglaÅ¡ate z naÅ¡o rabo piÅ¡kotkov in drugih sledilnih tehnologij.<br/>","title":"Uporabljamo piÅ¡kotke"},"level_functionality":{"content":"<p>Ti piÅ¡kotki se uporabljajo za zagotavljanje bolj personalizirane izkuÅ¡nje na naÅ¡i spletni strani in za shranjevanje vaÅ¡ih odloÄitev ob uporabi naÅ¡e spletne strani.</p><p>Funkcionalne piÅ¡kotke lahko, na primer, uporabljamo za to, da si zapomnimo vaÅ¡e jezikovne nastavitve oz. podatke za vpis v vaÅ¡ raÄun.</p>","title":"Funkcionalni piÅ¡kotki (ang. functionality cookies)"},"level_strictly_necessary":{"content":"<p>Ti piÅ¡kotki so kljuÄnega pomena pri zagotavljanju storitev, ki so na voljo na naÅ¡i spletni strani, in pri omogoÄanju doloÄenih funkcionalnosti naÅ¡e spletne strani.</p><p>Brez teh piÅ¡kotkov vam ne moremo zagotoviti doloÄenih storitev na naÅ¡i spletni strani.</p>","title":"Nujno potrebni piÅ¡kotki (ang. strictly necessary cookies)"},"level_targeting":{"content":"<p>Ti piÅ¡kotki se uporabljajo za prikazovanje spletnih oglasov, ki vas bodo na podlagi vaÅ¡ih navad pri brskanju verjetno zanimali.</p><p>Ti piÅ¡kotki, ki jih uporabljajo naÅ¡i oglaÅ¡evalski ponudniki oz. ponudniki vsebine, lahko zdruÅ¾ujejo podatke, ki so jih zbrali na naÅ¡i spletni strani, z drugimi podatki, ki so jih zbrali neodvisno v povezavi z dejavnostmi vaÅ¡ega spletnega brskalnika na njihovi mreÅ¾i spletnih mest.</p><p>ÄŒe se odloÄite izbrisati oz. onemogoÄiti te ciljne in oglaÅ¡evalske piÅ¡kotke, boste Å¡e vedno videvali oglase, vendar ti morda ne bodo relevantni za vas.</p>","title":"Ciljni in oglaÅ¡evalski piÅ¡kotki (ang. targeting and advertising cookies)"},"level_tracking":{"content":"<p>Ti piÅ¡kotki se uporabljajo za zbiranje podatkov za analizo obiskov naÅ¡e spletne strani in vpogled v to, kako gostje uporabljajo naÅ¡o spletno stran.</p><p>Ti piÅ¡kotki lahko, na primer, spremljajo stvari kot so to, koliko Äasa preÅ¾ivite na naÅ¡i spletni strani oz. katere strani obiÅ¡Äete, kar nam pomaga pri razumevanju, kako lahko za vas izboljÅ¡amo spletno stran.</p><p>Podatki, ki jih zbirajo ti piÅ¡kotki, ne identificirajo nobenega posameznega uporabnika.</p>","title":"Sledilni in izvedbeni piÅ¡kotki (ang. tracking and performance cookies)"},"preference_center":{"save":"Shrani moje nastavitve","title":"Nastavitve piÅ¡kotkov"},"preference_center_menu_and_content":{"more_information_content":"<h1>VeÄ informacij</h1><p>ÄŒe imate kakrÅ¡nakoli vpraÅ¡anja v zvezi z naÅ¡im pravilnikom o piÅ¡kotkih in vaÅ¡ih izbirah, nas prosim kontaktirajte.</p>","more_information_title":"VeÄ informacij","your_privacy_content":"<h1>Cenimo vaÅ¡o zasebnost</h1>\\n<p>PiÅ¡kotki so majhne besedilne datoteke, ki se shranijo na vaÅ¡o napravo ob obisku spletne strani. PiÅ¡kotke uporabljamo v veÄ namenov, predvsem pa za izboljÅ¡anje vaÅ¡e spletne izkuÅ¡nje na naÅ¡i strani (na primer za shranjevanje podatkov ob vpisu v vaÅ¡ raÄun).</p><p>VaÅ¡e nastavitve lahko spremenite in onemogoÄite doloÄenim vrstam piÅ¡kotkov, da bi se shranili na vaÅ¡o napravo med brskanjem po naÅ¡i spletni strani. Poleg tega lahko odstranite katerekoli piÅ¡kotke, ki so Å¾e shranjeni v vaÅ¡i napravi, a upoÅ¡tevajte, da vam bo po izbrisu piÅ¡kotkov morda onemogoÄeno uporabljati dele naÅ¡e spletne strani.</p>","your_privacy_title":"VaÅ¡a zasebnost"}}')
}, function (e) {
    e.exports = JSON.parse('{"dialog":{"active":"Aktywne","always_active":"Zawsze aktywne","change_settings":"Zmiana ustawieÅ„","find_out_more":"<p>Aby dowiedzieÄ‡ siÄ™ wiÄ™cej, odwiedÅº naszÄ… <a href=\'%s\' target=\'_blank\'>PolitykÄ™ Cookie (PrywatnoÅ›ci)</a>.</p>","i_agree_text":"Zgoda","inactive":"Nieaktywne","ok_text":"OK","text":"UÅ¼ywamy plikÃ³w cookie i innych technologii Å›ledzenia, aby poprawiÄ‡ jakoÅ›Ä‡ przeglÄ…dania naszej witryny, wyÅ›wietlaÄ‡ spersonalizowane treÅ›ci i reklamy, analizowaÄ‡ ruch w naszej witrynie i wiedzieÄ‡, skÄ…d pochodzÄ… nasi uÅ¼ytkownicy. PrzeglÄ…dajÄ…c naszÄ… stronÄ™, wyraÅ¼asz zgodÄ™ na uÅ¼ywanie przez nas plikÃ³w cookie i innych technologii Å›ledzenia.<br/>","title":"UÅ¼ywamy pliki cookie"},"level_functionality":{"content":"<p>Te pliki cookie sÅ‚uÅ¼Ä… do bardziej spersonalizowanego korzystania z naszej strony internetowej i do zapamiÄ™tywania wyborÃ³w dokonywanych podczas korzystania z naszej strony internetowej.</p><p>Na przykÅ‚ad moÅ¼emy uÅ¼ywaÄ‡ funkcjonalnych plikÃ³w cookie do zapamiÄ™tywania preferencji jÄ™zykowych lub zapamiÄ™tywania danych logowania.</p>","title":"Funkcjonalne"},"level_strictly_necessary":{"content":"<p>Te pliki cookie sÄ… niezbÄ™dne do Å›wiadczenia usÅ‚ug dostÄ™pnych za poÅ›rednictwem naszej strony internetowej i umoÅ¼liwienia korzystania z niektÃ³rych funkcji naszej strony internetowej.</p><p>Bez tych plikÃ³w cookie nie moÅ¼emy zapewniÄ‡ usÅ‚ug na naszej stronie internetowej.</p>","title":"NiezbÄ™dne"},"level_targeting":{"content":"<p>Te pliki cookie sÅ‚uÅ¼Ä… do wyÅ›wietlania reklam, ktÃ³re mogÄ… CiÄ™ zainteresowaÄ‡ na podstawie Twoich zwyczajÃ³w przeglÄ…dania.</p><p>Pliki te tworzone przez naszych dostawcÃ³w treÅ›ci i/lub reklam, mogÄ… Å‚Ä…czyÄ‡ informacje zebrane z naszej strony z innymi informacjami, ktÃ³re gromadzili niezaleÅ¼nie w zwiÄ…zku z dziaÅ‚aniami przeglÄ…darki internetowej w ich sieci witryn.</p><p>JeÅ›li zdecydujesz siÄ™ usunÄ…Ä‡ lub wyÅ‚Ä…czyÄ‡ te pliki cookie, reklamy nadal bÄ™dÄ… wyÅ›wietlane, ale mogÄ… one nie byÄ‡ odpowiednie dla Ciebie.</p>","title":"Targeting i reklama"},"level_tracking":{"content":"<p>Te pliki cookie sÅ‚uÅ¼Ä… do zbierania informacji w celu analizy ruchu na naszej stronie internetowej i sposobu, w jaki uÅ¼ytkownicy korzystajÄ… z naszej strony internetowej.</p><p>Na przykÅ‚ad te pliki cookie mogÄ… Å›ledziÄ‡ takie rzeczy, jak czas spÄ™dzony na stronie lub odwiedzane strony, co pomaga nam zrozumieÄ‡, w jaki sposÃ³b moÅ¼emy ulepszyÄ‡ naszÄ… witrynÄ™ internetowÄ….</p><p>Informacje zebrane przez te pliki nie identyfikujÄ… Å¼adnego konkretnego uÅ¼ytkownika.</p>","title":"Åšledzenie i wydajnoÅ›Ä‡"},"preference_center":{"save":"Zapisz ustawienia","title":"Centrum ustawieÅ„ cookie"},"preference_center_menu_and_content":{"more_information_content":"<h1>WiÄ™cej informacji</h1><p>W przypadku jakichkolwiek pytaÅ„ dotyczÄ…cych naszej polityki dotyczÄ…cej plikÃ³w cookie i Twoich wyborÃ³w, skontaktuj siÄ™ z nami.</p>","more_information_title":"WiÄ™cej informacji","your_privacy_content":"<h1>Twoja prywatnoÅ›Ä‡ jest dla nas waÅ¼na.</h1>\\n<p>Pliki cookie to bardzo maÅ‚e pliki tekstowe, ktÃ³re sÄ… tworzone i przechowywane na komputerze uÅ¼ytkownika podczas odwiedzania strony internetowej. UÅ¼ywamy plikÃ³w cookie do rÃ³Å¼nych celÃ³w, w tym do ulepszania obsÅ‚ugi online na naszej stronie internetowej (na przykÅ‚ad, aby zapamiÄ™taÄ‡ dane logowania do konta).</p><p>MoÅ¼esz zmieniÄ‡ swoje ustawienia i odrzuciÄ‡ niektÃ³re rodzaje plikÃ³w cookie, ktÃ³re majÄ… byÄ‡ przechowywane na twoim komputerze podczas przeglÄ…dania naszej strony. MoÅ¼esz rÃ³wnieÅ¼ usunÄ…Ä‡ wszystkie pliki cookie juÅ¼ zapisane na komputerze, ale pamiÄ™taj, Å¼e usuniÄ™cie plikÃ³w cookie moÅ¼e uniemoÅ¼liwiÄ‡ korzystanie z czÄ™Å›ci naszej strony internetowej.</p>","your_privacy_title":"Twoja prywatnoÅ›Ä‡"}}')
}, function (e) {
    e.exports = JSON.parse('{"dialog":{"active":"Aktivno","always_active":"Uvek aktivno","change_settings":"Promeni moja podeÅ¡avanja","find_out_more":"<p>Da saznate viÅ¡e, pogledajte naÅ¡u <a href=\'%s\' target=\'_blank\'>Politiku o KolaÄiÄ‡ima</a>.</p>","i_agree_text":"SlaÅ¾em se","inactive":"Neaktivno","ok_text":"OK","text":"Mi koristimo kolaÄiÄ‡e i ostale  tehnologije za praÄ‡enje kako bi unapredili vaÅ¡u pretragu na naÅ¡em veb sajtu, kako bi vam prikazali personalizovani sadrÅ¾aj i ciljane reklame, analizirali posete na naÅ¡em sajtu i razumeli odakle naÅ¡i posetioci sajta dolaze. Pregledanjem naÅ¡eg sajta, pristajete na koriÅ¡Ä‡enje kolaÄiÄ‡ i drugih tehnologija praÄ‡enja.<br/>","title":"Mi koristimo kolaÄiÄ‡e"},"level_functionality":{"content":"<p>Ovi kukiji koriste se za pruÅ¾anje personalizovanijeg iskustva na naÅ¡em veb sajtu i za pamÄ‡enje izbora koje koristite kada koristite naÅ¡u veb sajt.</p><p>Na primer, moÅ¾emo da koristimo kukije funkcionalnosti da bismo zapamtili vaÅ¡e jeziÄke postavke ili upamtili vaÅ¡e podatke za prijavu.</p>","title":"Funkcionalni kukiji"},"level_strictly_necessary":{"content":"<p>Ovi kukiji su neophodni za pruÅ¾anje usluga dostupnih putem naÅ¡eg veb sajta i za omoguÄ‡avanje koriÅ¡Ä‡enja odreÄ‘enih funkcija naÅ¡eg veb sajta.</p><p>Bez ovih kolaÄiÄ‡a ne moÅ¾emo vam pruÅ¾iti odreÄ‘ene usluge na naÅ¡em veb sajtu.</p>","title":"Obavezni kukiji"},"level_targeting":{"content":"<p>Ovi kukiji koriste se za prikazivanje reklama koje Ä‡e vas verovatno zanimati na osnovu vaÅ¡ih navika pregledavanja.</p><p>Ovi kukiji, opsluÅ¾eni od strane naÅ¡ih dobavljaÄa sadrÅ¾aja i / ili oglaÅ¡avanja, mogu kombinovati informacije koje su sakupili sa naÅ¡eg veb sajta sa drugim informacijama koje su nezavisno prikupili u vezi sa aktivnostima vaÅ¡eg veb pretraÅ¾ivaÄa kroz mreÅ¾u njihovih veb sajtova.</p><p>Ako odluÄite da uklonite ili onemoguÄ‡ite ove ciljane ili reklamne kukije i dalje Ä‡ete videti oglase, ali oni moÅ¾da neÄ‡e biti relevantni za vas.</p>","title":"Ciljanje i oglaÅ¡avanje kolaÄiÄ‡"},"level_tracking":{"content":"<p>Ovi kukiji koriste se za prikupljanje informacija za analizu saobraÄ‡aja na naÅ¡em veb sajtu i kako posetioci koriste naÅ¡ veb sajt.</p><p>Na primer, ovi kolaÄiÄ‡i mogu pratiti stvari poput vremena koliko provodite na veb lokaciji ili stranicama koje poseÄ‡ujete Å¡to nam pomaÅ¾e da shvatimo kako moÅ¾emo da poboljÅ¡amo naÅ¡ veb sajt.</p><p>Informacije prikupljene ovim kukijima za praÄ‡enje i performanse ne identifikuju nijednog pojedinaÄnog posetioca.</p>","title":"PraÄ‡enje i performanse kolaÄiÄ‡"},"preference_center":{"save":"SaÄuvaj moja podeÅ¡avanja","title":"Centar za podeÅ¡avanje kolaÄiÄ‡"},"preference_center_menu_and_content":{"more_information_content":"<h1>ViÅ¡e informacija</h1><p>Za bilo koje upite vezane za naÅ¡u politiku o kukijima i vaÅ¡im izbor, molimo vas kontaktirajte nas.</p>","more_information_title":"ViÅ¡e informacija","your_privacy_content":"<h1>VaÅ¡a privatnost je vaÅ¾na za nas</h1>\\n<p>Kukiji su veoma mali tekstualni fajlovi koji su saÄuvani na vaÅ¡em raÄunaru kada poseÄ‡ujete veb sajt. Mi koristimo kolaÄiÄ‡e za razliÄite namene i kako bi unapredili vaÅ¡e onlajn iskustvo na naÅ¡em veb sajtu (na primer, kako bi zapamtili vaÅ¡e pristupne podatke).</p><p>Vi moÅ¾ete promeniti vaÅ¡a podeÅ¡avanja i odbiti odreÄ‘enu vrstu kolaÄiÄ‡a koji Ä‡e biti saÄuvani na vaÅ¡em raÄunaru dok pregledate naÅ¡ veb sajt. TakoÄ‘e moÅ¾ete izbisati bilo koji kuki koji je veÄ‡ saÄuvan u vaÅ¡em raÄunaru, ali imajte na umu da brisanjem kolaÄiÄ‡ moÅ¾ete onemoguÄ‡iti pristup nekim delovima naÅ¡eg veb sajta.</p>","your_privacy_title":"VaÅ¡a privatnost"}}')
}, function (e) {
    e.exports = JSON.parse('{"dialog":{"active":"Î•Î½ÎµÏÎ³ÏŒ","always_active":"Î Î¬Î½Ï„Î± ÎµÎ½ÎµÏÎ³ÏŒ","change_settings":"Î‘Î»Î»Î±Î³Î® Ï„Ï‰Î½ Ï€ÏÎ¿Ï„Î¹Î¼Î®ÏƒÎµÏŽÎ½ Î¼Î¿Ï…","find_out_more":"<p>Î“Î¹Î± Î½Î± Î¼Î¬Î¸ÎµÏ„Îµ Ï€ÎµÏÎ¹ÏƒÏƒÏŒÏ„ÎµÏÎ±, Ï€Î±ÏÎ±ÎºÎ±Î»Î¿ÏÎ¼Îµ ÎµÏ€Î¹ÏƒÎºÎµÏ†Î¸ÎµÎ¯Ï„Îµ Ï„Î·Î½ ÏƒÎµÎ»Î¯Î´Î± Ï€ÎµÏÎ¯ <a href=\'%s\' target=\'_blank\'>Ï€Î¿Î»Î¹Ï„Î¹ÎºÎ®Ï‚ cookies</a>.</p>","i_agree_text":"Î£Ï…Î¼Ï†Ï‰Î½ÏŽ","inactive":"Î‘Î½ÎµÎ½ÎµÏÎ³ÏŒ","ok_text":"OK","text":"Î§ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹Î¿ÏÎ¼Îµ cookies ÎºÎ±Î¹ Î¬Î»Î»ÎµÏ‚ Ï„ÎµÏ‡Î½Î¿Î»Î¿Î³Î¯ÎµÏ‚ ÎµÎ½Ï„Î¿Ï€Î¹ÏƒÎ¼Î¿Ï Î³Î¹Î± Ï„Î·Î½ Î²ÎµÎ»Ï„Î¯Ï‰ÏƒÎ· Ï„Î·Ï‚ ÎµÎ¼Ï€ÎµÎ¹ÏÎ¯Î±Ï‚ Ï€ÎµÏÎ¹Î®Î³Î·ÏƒÎ·Ï‚ ÏƒÏ„Î·Î½ Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î± Î¼Î±Ï‚, Î³Î¹Î± Ï„Î·Î½ ÎµÎ¾Î±Ï„Î¿Î¼Î¯ÎºÎµÏ…ÏƒÎ· Ï€ÎµÏÎ¹ÎµÏ‡Î¿Î¼Î­Î½Î¿Ï… ÎºÎ±Î¹ Î´Î¹Î±Ï†Î·Î¼Î¯ÏƒÎµÏ‰Î½, Ï„Î·Î½ Ï€Î±ÏÎ¿Ï‡Î® Î»ÎµÎ¹Ï„Î¿Ï…ÏÎ³Î¹ÏŽÎ½ ÎºÎ¿Î¹Î½Ï‰Î½Î¹ÎºÏŽÎ½ Î¼Î­ÏƒÏ‰Î½ ÎºÎ±Î¹ Ï„Î·Î½ Î±Î½Î¬Î»Ï…ÏƒÎ· Ï„Î·Ï‚ ÎµÏ€Î¹ÏƒÎºÎµÏˆÎ¹Î¼ÏŒÏ„Î·Ï„Î¬Ï‚ Î¼Î±Ï‚. Î‘Î½ ÏƒÏ…Î½ÎµÏ‡Î¯ÏƒÎµÏ„Îµ Î½Î± Ï‡ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹ÎµÎ¯Ï„Îµ Ï„Î·Î½ Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î± Î¼Î±Ï‚, ÏƒÏ…Î½Î±Î¹Î½ÎµÎ¯Ï„Îµ ÏƒÏ„Î· Ï‡ÏÎ®ÏƒÎ· Ï„Ï‰Î½ cookies Î¼Î±Ï‚.<br/>","title":"Î‘Ï…Ï„Î® Î· Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î± Ï‡ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹ÎµÎ¯ cookies"},"level_functionality":{"content":"<p>Î‘Ï…Ï„Î¬ Ï„Î± cookies Ï‡ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹Î¿ÏÎ½Ï„Î±Î¹ Î³Î¹Î± Î½Î± ÏƒÎ±Ï‚ Ï€Î±ÏÎ­Ï‡Î¿Ï…Î½ Î¼Î¯Î± Ï€Î¹Î¿ Ï€ÏÎ¿ÏƒÏ‰Ï€Î¿Ï€Î¿Î¹Î·Î¼Î­Î½Î· ÎµÎ¼Ï€ÎµÎ¹ÏÎ¯Î± ÏƒÏ„Î·Î½ Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î± Î¼Î±Ï‚ ÎºÎ±Î¹ Î³Î¹Î± Î½Î± Î¸Ï…Î¼Î¿ÏÎ½Ï„Î±Î¹ ÎµÏ€Î¹Î»Î¿Î³Î­Ï‚ Ï€Î¿Ï… ÎºÎ¬Î½ÎµÏ„Îµ ÏŒÏ„Î±Î½ Ï‡ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹ÎµÎ¯Ï„Îµ Ï„Î·Î½ Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î± Î¼Î±Ï‚.</p><p>Î“Î¹Î± Ï€Î±ÏÎ¬Î´ÎµÎ¹Î³Î¼Î±, Î¼Ï€Î¿ÏÎµÎ¯ Î½Î± Ï‡ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹Î®ÏƒÎ¿Ï…Î¼Îµ cookies Î»ÎµÎ¹Ï„Î¿Ï…ÏÎ³Î¹ÎºÏŒÏ„Î·Ï„Î±Ï‚ Î³Î¹Î± Î½Î± Î¸Ï…Î¼ÏŒÎ¼Î±ÏƒÏ„Îµ Ï„Î·Î½ ÎµÏ€Î¹Î»Î¿Î³Î® Î³Î»ÏŽÏƒÏƒÎ±Ï‚ Î® Ï„Î± ÏƒÏ„Î¿Î¹Ï‡ÎµÎ¯Î± ÎµÎ¹ÏƒÏŒÎ´Î¿Ï… ÏƒÎ±Ï‚.</p>","title":"Cookies Î›ÎµÎ¹Ï„Î¿Ï…ÏÎ³Î¹ÎºÏŒÏ„Î·Ï„Î±Ï‚"},"level_strictly_necessary":{"content":"<p>Î¤Î± Î±Ï€Î±ÏÎ±Î¯Ï„Î·Ï„Î± cookies Î²Î¿Î·Î¸Î¿ÏÎ½ ÏƒÏ„Î¿ Î½Î± Î³Î¯Î½ÎµÎ¹ Ï‡ÏÎ·ÏƒÏ„Î¹ÎºÎ® Î¼Î¯Î± Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î±, ÎµÏ€Î¹Ï„ÏÎ­Ï€Î¿Î½Ï„Î±Ï‚ Î²Î±ÏƒÎ¹ÎºÎ­Ï‚ Î»ÎµÎ¹Ï„Î¿Ï…ÏÎ³Î¯ÎµÏ‚ ÏŒÏ€Ï‰Ï‚ Ï„Î·Î½ Ï€Î»Î¿Î®Î³Î·ÏƒÎ· ÎºÎ±Î¹ Ï„Î·Î½ Ï€ÏÏŒÏƒÎ²Î±ÏƒÎ· ÏƒÎµ Î±ÏƒÏ†Î±Î»ÎµÎ¯Ï‚ Ï€ÎµÏÎ¹Î¿Ï‡Î­Ï‚ Ï„Î·Ï‚ Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î±Ï‚.</p><p>Î— Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î± Î´ÎµÎ½ Î¼Ï€Î¿ÏÎµÎ¯ Î½Î± Î»ÎµÎ¹Ï„Î¿Ï…ÏÎ³Î®ÏƒÎµÎ¹ ÏƒÏ‰ÏƒÏ„Î¬ Ï‡Ï‰ÏÎ¯Ï‚ Î±Ï…Ï„Î¬ Ï„Î± cookies.</p>","title":"Î†ÎºÏÏ‰Ï‚ Î±Ï€Î±ÏÎ±Î¯Ï„Î·Ï„Î± cookies"},"level_targeting":{"content":"<p>Î‘Ï…Ï„Î¬ Ï„Î± cookies Ï‡ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹Î¿ÏÎ½Ï„Î±Î¹ Î³Î¹Î± Î½Î± Î´ÎµÎ¯Ï‡Î½Î¿Ï…Î½ Î´Î¹Î±Ï†Î·Î¼Î¯ÏƒÎµÎ¹Ï‚ Ï€Î¿Ï… Î¼Ï€Î¿ÏÎµÎ¯ Î½Î± ÏƒÎ±Ï‚ ÎµÎ½Î´Î¹Î±Ï†Î­ÏÎ¿Ï…Î½ Î¼Îµ Î²Î¬ÏƒÎ· Ï„Î¹Ï‚ ÏƒÏ…Î½Î®Î¸ÎµÎ¹ÎµÏ‚ Ï€ÎµÏÎ¹Î®Î³Î·ÏƒÎ®Ï‚ ÏƒÎ±Ï‚ ÏƒÏ„Î¿ Î”Î¹Î±Î´Î¯ÎºÏ„Ï…Î¿.</p><p>Î‘Ï…Ï„Î¬ Ï„Î± cookies, Ï€Î±ÏÎ­Ï‡Î¿Î½Ï„Î±Î¹ Î±Ï€ÏŒ Ï„Î¿Ï…Ï‚ Ï€Î±ÏÏŒÏ‡Î¿Ï…Ï‚ Ï€ÎµÏÎ¹ÎµÏ‡Î¿Î¼Î­Î½Î¿Ï… Î®/ÎºÎ±Î¹ Î´Î¹Î±Ï†Î·Î¼Î¯ÏƒÎµÏ‰Î½, Î¼Ï€Î¿ÏÎµÎ¯ Î½Î± ÏƒÏ…Î½Î´Ï…Î¬Î¶Î¿Ï…Î½ Ï€Î»Î·ÏÎ¿Ï†Î¿ÏÎ¯ÎµÏ‚ Ï€Î¿Ï… ÏƒÏ…Î»Î»Î­Î³Î¿Ï…Î½ Î±Ï€ÏŒ Ï„Î·Î½ Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î± Î¼Î±Ï‚ Î¼Îµ Î¬Î»Î»ÎµÏ‚ Ï€Î¿Ï… Î­Ï‡Î¿Ï…Î½ Î±Î½ÎµÎ¾Î¬ÏÏ„Î·Ï„Î± ÏƒÏ…Î»Î»Î­Î¾ÎµÎ¹ Î±Ï€ÏŒ Î¬Î»Î»Î± Î´Î¯ÎºÏ„Ï…Î± Î® Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´ÎµÏ‚ ÏƒÏ‡ÎµÏ„Î¹ÎºÎ¬ Î¼Îµ Ï„Î¹Ï‚ Î´ÏÎ±ÏƒÏ„Î·ÏÎ¹ÏŒÏ„Î·Ï„Î­Ï‚ ÏƒÎ±Ï‚ ÏƒÏ„Î¿Î½ Ï†Ï…Î»Î»Î¿Î¼ÎµÏ„ÏÎ·Ï„Î® ÏƒÎ±Ï‚.</p><p>Î•Î¬Î½ ÎµÏ€Î¹Î»Î­Î¾ÎµÏ„Îµ Î½Î± Î±Ï†Î±Î¹ÏÎ­ÏƒÎµÏ„Îµ Î® Î½Î± Î±Ï€ÎµÎ½ÎµÏÎ³Î¿Ï€Î¿Î¹Î®ÏƒÎµÏ„Îµ Î±Ï…Ï„Î¬ Ï„Î± cookies, Î¸Î± ÏƒÏ…Î½ÎµÏ‡Î¯ÏƒÎµÏ„Îµ Î½Î± Î²Î»Î­Ï€ÎµÏ„Îµ Î´Î¹Î±Ï†Î·Î¼Î¯ÏƒÎµÎ¹Ï‚, Î±Î»Î»Î¬ Î±Ï…Ï„Î­Ï‚ Î¼Ï€Î¿ÏÎµÎ¯ Î½Î± Î¼Î·Î½ ÎµÎ¯Î½Î±Î¹ Ï€Î»Î­Î¿Î½ ÏƒÏ‡ÎµÏ„Î¹ÎºÎ­Ï‚ Î¼Îµ Ï„Î± ÎµÎ½Î´Î¹Î±Ï†Î­ÏÎ¿Î½Ï„Î¬ ÏƒÎ±Ï‚.</p>","title":"Cookies ÎµÎ¾Î±Ï„Î¿Î¼Î¹ÎºÎµÏ…Î¼Î­Î½Î¿Ï… Ï€ÎµÏÎ¹ÎµÏ‡Î¿Î¼Î­Î½Î¿Ï… ÎºÎ±Î¹ Î´Î¹Î±Ï†Î·Î¼Î¯ÏƒÎµÏ‰Î½"},"level_tracking":{"content":"<p>Î‘Ï…Ï„Î¬ Ï„Î± cookies Ï‡ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹Î¿ÏÎ½Ï„Î±Î¹ Î³Î¹Î± Î½Î± ÏƒÏ…Î»Î»Î­Î³Î¿Ï…Î½ Ï€Î»Î·ÏÎ¿Ï†Î¿ÏÎ¯ÎµÏ‚ ÏƒÏ‡ÎµÏ„Î¹ÎºÎ­Ï‚ Î¼Îµ Ï„Î·Î½ Î±Î½Î¬Î»Ï…ÏƒÎ· Ï„Î·Ï‚ ÎµÏ€Î¹ÏƒÎºÎµÏˆÎ¹Î¼ÏŒÏ„Î·Ï„Î±Ï‚ Ï„Î·Ï‚ Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î±Ï‚ Î¼Î±Ï‚ ÎºÎ±Î¹ Î¼Îµ Ï„Î¿ Ï€ÏŽÏ‚ Î¿Î¹ Ï‡ÏÎ®ÏƒÏ„ÎµÏ‚ Ï„Î·Î½ Ï‡ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹Î¿ÏÎ½.</p><p>Î“Î¹Î± Ï€Î±ÏÎ¬Î´ÎµÎ¹Î³Î¼Î±, Î±Ï…Ï„Î¬ Ï„Î± cookies Î¼Ï€Î¿ÏÎµÎ¯ Î½Î± ÎµÎ½Ï„Î¿Ï€Î¯ÏƒÎ¿Ï…Î½ Ï€ÏŒÏƒÎ¿ Ï‡ÏÏŒÎ½Î¿ Î±Ï†Î¹ÎµÏÏŽÎ½ÎµÏ„Îµ ÏƒÏ„Î·Î½ Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î± Î¼Î±Ï‚ Î® Ï€Î¿Î¹ÎµÏ‚ ÏƒÎµÎ»Î¯Î´ÎµÏ‚ Ï„Î·Ï‚ ÎµÏ€Î¹ÏƒÎºÎ­Ï€Ï„ÎµÏƒÏ„Îµ, Ï€ÏÎ¬Î³Î¼Î± Ï€Î¿Ï… Î¼Î±Ï‚ Î²Î¿Î·Î¸Î¬ÎµÎ¹ Î½Î± ÎºÎ±Ï„Î±Î»Î¬Î²Î¿Ï…Î¼Îµ Ï€ÏŽÏ‚ Î½Î± Î²ÎµÎ»Ï„Î¹ÏŽÏƒÎ¿Ï…Î¼Îµ Ï„Î·Î½ Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î± Î¼Î±Ï‚.</p><p>ÎŸÎ¹ Ï€Î»Î·ÏÎ¿Ï†Î¿ÏÎ¯ÎµÏ‚ Ï€Î¿Ï… ÏƒÏ…Î»Î»Î­Î³Î¿Î½Ï„Î±Î¹ Î¼Î­ÏƒÏ‰ Î±Ï…Ï„ÏŽÎ½ Ï„Ï‰Î½ cookies Î´ÎµÎ½ Î±Î½Î±Î³Î½Ï‰ÏÎ¯Î¶Î¿Ï…Î½ Î¼ÎµÎ¼Î¿Î½Ï‰Î¼Î­Î½Î¿Ï…Ï‚ Ï‡ÏÎ®ÏƒÏ„ÎµÏ‚.</p>","title":"Cookies ÎµÎ½Ï„Î¿Ï€Î¹ÏƒÎ¼Î¿Ï ÎºÎ±Î¹ Î±Ï€Î¿Î´Î¿Ï„Î¹ÎºÏŒÏ„Î·Ï„Î±Ï‚"},"preference_center":{"save":"Î‘Ï€Î¿Î¸Î®ÎºÎµÏ…ÏƒÎ· Ï„Ï‰Î½ Ï€ÏÎ¿Ï„Î¹Î¼Î®ÏƒÎµÏŽÎ½ Î¼Î¿Ï…","title":"ÎšÎ­Î½Ï„ÏÎ¿ Î ÏÎ¿Ï„Î¹Î¼Î®ÏƒÎµÏ‰Î½ Cookies"},"preference_center_menu_and_content":{"more_information_content":"<h1>Î ÎµÏÎ¹ÏƒÏƒÏŒÏ„ÎµÏÎµÏ‚ Ï€Î»Î·ÏÎ¿Ï†Î¿ÏÎ¯ÎµÏ‚.</h1><p>Î“Î¹Î± Î¿Ï€Î¿Î¹Î±Î´Î®Ï€Î¿Ï„Îµ Î±Ï€Î¿ÏÎ¯Î± ÏƒÎµ ÏƒÏ‡Î­ÏƒÎ· Î¼Îµ Ï„Î·Î½ Ï€Î¿Î»Î¹Ï„Î¹ÎºÎ® Î¼Î±Ï‚ ÏƒÏ‡ÎµÏ„Î¹ÎºÎ¬ Î¼Îµ Ï„Î± cookies ÎºÎ±Î¹ Ï„Î¹Ï‚ ÎµÏ€Î¹Î»Î¿Î³Î­Ï‚ ÏƒÎ±Ï‚, Ï€Î±ÏÎ±ÎºÎ±Î»Î¿ÏÎ¼Îµ Î½Î± Î­ÏÎ¸ÎµÏ„Îµ ÏƒÎµ ÎµÏ€Î±Ï†Î® Î¼Î±Î¶Î¯ Î¼Î±Ï‚.</p>","more_information_title":"Î ÎµÏÎ¹ÏƒÏƒÏŒÏ„ÎµÏÎµÏ‚ Ï€Î»Î·ÏÎ¿Ï†Î¿ÏÎ¯ÎµÏ‚","your_privacy_content":"<h1>Î— Î¹Î´Î¹Ï‰Ï„Î¹ÎºÏŒÏ„Î·Ï„Î¬ ÏƒÎ±Ï‚ ÎµÎ¯Î½Î±Î¹ ÏƒÎ·Î¼Î±Î½Ï„Î¹ÎºÎ® Î³Î¹Î± ÎµÎ¼Î¬Ï‚.</h1>\\n<p>Î¤Î± cookies ÎµÎ¯Î½Î±Î¹ Ï€Î¿Î»Ï Î¼Î¹ÎºÏÎ¬ Î±ÏÏ‡ÎµÎ¯Î± ÎºÎµÎ¹Î¼Î­Î½Î¿Ï… Ï€Î¿Ï… Î±Ï€Î¿Î¸Î·ÎºÎµÏÎ¿Î½Ï„Î±Î¹ ÏƒÏ„Î¿Î½ Ï…Ï€Î¿Î»Î¿Î³Î¹ÏƒÏ„Î® ÏƒÎ±Ï‚ ÏŒÏ„Î±Î½ ÎµÏ€Î¹ÏƒÎºÎ­Ï€Ï„ÎµÏƒÏ„Îµ Î¼Î¹Î± Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î±. Î§ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹Î¿ÏÎ¼Îµ cookies Î³Î¹Î± Î´Î¹Î¬Ï†Î¿ÏÎ¿Ï…Ï‚ Î»ÏŒÎ³Î¿Ï…Ï‚ ÎºÎ±Î¹ Î³Î¹Î± Î½Î± Î²ÎµÎ»Ï„Î¹ÏŽÏƒÎ¿Ï…Î¼Îµ Ï„Î·Î½ Î´Î¹Î±Î´Î¹ÎºÏ„Ï…Î±ÎºÎ® ÏƒÎ±Ï‚ ÎµÎ¼Ï€ÎµÎ¹ÏÎ¯Î± ÏƒÏ„Î·Î½ Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î± Î¼Î±Ï‚ (Ï€.Ï‡., Î³Î¹Î± Ï…Ï€ÎµÎ½Î¸ÏÎ¼Î¹ÏƒÎ· Ï„Ï‰Î½ ÏƒÏ„Î¿Î¹Ï‡ÎµÎ¯Ï‰Î½ Ï€ÏÏŒÏƒÎ²Î±ÏƒÎ®Ï‚ ÏƒÎ±Ï‚ ÏƒÏ„Î·Î½ Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î±).</p><p>ÎœÏ€Î¿ÏÎµÎ¯Ï„Îµ Î½Î± Î±Î»Î»Î¬Î¾ÎµÏ„Îµ Ï„Î¹Ï‚ Ï€ÏÎ¿Ï„Î¹Î¼Î®ÏƒÎµÎ¹Ï‚ ÏƒÎ±Ï‚ ÎºÎ±Î¹ Î½Î± Î¼Î·Î½ ÎµÏ€Î¹Ï„ÏÎ­ÏˆÎµÏ„Îµ ÏƒÎµ ÎºÎ¬Ï€Î¿Î¹Î¿Ï…Ï‚ Ï„ÏÏ€Î¿Ï…Ï‚ cookies Î½Î± Î±Ï€Î¿Î¸Î·ÎºÎµÏ…Ï„Î¿ÏÎ½ ÏƒÏ„Î¿Î½ Ï…Ï€Î¿Î»Î¿Î³Î¹ÏƒÏ„Î® ÏƒÎ±Ï‚ ÏŒÏƒÎ¿ Ï€ÎµÏÎ¹Î·Î³ÎµÎ¯ÏƒÏ„Îµ ÏƒÏ„Î·Î½ Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î± Î¼Î±Ï‚. ÎœÏ€Î¿ÏÎµÎ¯Ï„Îµ ÎµÏ€Î¯ÏƒÎ·Ï‚ Î½Î± Î´Î¹Î±Î³ÏÎ¬ÏˆÎµÏ„Îµ Î¿Ï€Î¿Î¹Î±Î´Î®Ï€Î¿Ï„Îµ cookies ÎµÎ¯Î½Î±Î¹ Î®Î´Î· Î±Ï€Î¿Î¸Î·ÎºÎµÏ…Î¼Î­Î½Î± ÏƒÏ„Î¿Î½ Ï…Ï€Î¿Î»Î¿Î³Î¹ÏƒÏ„Î® ÏƒÎ±Ï‚, Î±Î»Î»Î¬ Î½Î± Î­Ï‡ÎµÏ„Îµ Ï…Ï€ÏŒÏˆÎ¹Î½ ÏŒÏ„Î¹ Î´Î¹Î±Î³ÏÎ¬Ï†Î¿Î½Ï„Î±Ï‚ cookies Î¼Ï€Î¿ÏÎµÎ¯ Î½Î± ÏƒÎ±Ï‚ Î±Ï€Î¿Ï„ÏÎ­ÏˆÎµÎ¹ Î±Ï€ÏŒ Ï„Î¿ Î½Î± Ï‡ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹Î®ÏƒÎµÏ„Îµ Î¼Î­ÏÎ· Ï„Î·Ï‚ Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î±Ï‚ Î¼Î±Ï‚.</p>","your_privacy_title":"Î— Î¹Î´Î¹Ï‰Ï„Î¹ÎºÏŒÏ„Î·Ï„Î¬ ÏƒÎ±Ï‚"}}')
}, function (e) {
    e.exports = JSON.parse('{"dialog":{"active":"Gweithredol","always_active":"Yn weithredol bob tro","change_settings":"Newid fy newisiadau","find_out_more":"<p>I ganfod mwy, ewch at ein <a href=\'%s\' target=\'_blank\'>Polisi Cwcis</a>.</p>","i_agree_text":"Rwy\'n cytuno","inactive":"Anweithredol","ok_text":"Iawn","text":"Rydym yn defnyddio cwcis a thechnolegau tracio eraill i wella eich profiad o bori ar ein gwefan, i ddangos cynnwys wedi ei bersonoli a hysbysebion wedi\'u targedu, i ddadansoddi traffig ar ein gwefan ac i ddeall o ble daw ein hymwelwyr. Trwy bori ar ei gwefan, rydych yn cytuno y cawn ddefnyddio cwcis a thechnolegau tracio eraill.<br/>","title":"Rydym yn defnyddio cwcis"},"level_functionality":{"content":"<p>Mae\'r cwcis yma yn cael eu defnyddio i ddarparu profiad mwy personol ichi ar ein gwefan, ac i gofio dewisiadau a wnewch wrth ddefnyddio ein gwefan.</p><p>Er enghraifft, gallem ddefnyddio cwcis swyddogaeth i gofio\'ch dewis iaith neu gofio\'ch manylion mewngofnodi.</p>","title":"Cwcis swyddogaeth"},"level_strictly_necessary":{"content":"<p>Mae\'r cwcis yma yn hanfodol er mwyn ichi dderbyn gwasanaethau drwy ein gwefan a\'ch galluogi i ddefnyddio nodweddion penodol ar ein gwefan.</p><p>Heb y cwcis yma, ni fedrwn ddarparu rhai gwasanaethau penodol ichi ar ein gwefan.</p>","title":"Cwcis hollol hanfodol"},"level_targeting":{"content":"<p>Mae\'r cwcis yma yn cael eu defnyddio i ddangos hysbysebion sydd yn debygol o fod o ddiddordeb i chi yn seiliedig ar eich arferion pori.</p><p>Gall y cwcis yma, fel y\'u gweinyddir gan ein darparwyr cynnwys a/neu hysbysebion, gyfuno gwybodaeth a gasglwyd ganddynt o\'n gwefan gyda gwybodaeth arall maent wedi ei chasglu\'n annibynnol yn seiliedig ar eich gweithgareddau pori ar y rhyngrwyd ar draws eu rhwydweithiau o wefannau.</p><p>Os byddwch yn dewis tynnu neu atal y cwcis targedu neu hysbysebu yma, byddwch yn parhau i weld hysbysebion ond mae\'n bosib na fyddant yn berthnasol i chi. </p>","title":"Cwcis targedu a hysbysebu"},"level_tracking":{"content":"<p>Mae\'r cwcis yma yn cael eu defnyddio i gasglu gwybodaeth a dadansoddi traffig i\'n gwefan a sut mae ymwelwyr yn defnyddio\'n gwefan.</p><p>Er enghraifft, gall y cwcis yma dracio faint o amser rydych yn ei dreulio ar y wefan neu\'r tudalennau rydych yn ymweld Ã¢ hwy a\'n cynorthwyo i ddeall sut y gallwn wella ein gwefan ar eich cyfer.<p>Nid yw\'r wybodaeth a gesglir drwy\'r cwcis tracio a pherfformiad yn adnabod unrhyw ymwelydd unigol.</p>","title":"Cwcis tracio a pherfformiad"},"preference_center":{"save":"Cadw fy newisiadau","title":"Canolfan Dewisiadau Cwcis"},"preference_center_menu_and_content":{"more_information_content":"<h1>Rhagor o wybodaeth.</h1><p>Os oes gennych chi unrhyw ymholiadau yn ymwneud Ã¢\'n polisi cwcis a\'ch dewisiadau, a wnewch chi gysylltu Ã¢ ni.</p>","more_information_title":"Rhagor o wybodaeth","your_privacy_content":"<h1>Mae eich preifatrwydd yn bwysig i ni.</h1>\\n<p>Ffeiliau testun bach eu maint yw cwcis sydd yn cael eu storio ar eich cyfrifiadur wrth ichi ymweld Ã¢ gwefan. Rydym yn defnyddio cwcis i sawl diben ac i wella eich profiad ar-lein ar ein gwefan (er enghraifft, cofio eich manylion mewngofnodi i\'ch cyfrif).</p><p>Gallwch newid eich dewisiadau ac atal rhai mathau o gwcis rhag cael eu storio ar eich cyfrifiadur. Gallwch hefyd dynnu unrhyw gwcis sydd eisoes wedi eu storio ar eich cyfrifiadur, ond cofiwch y gall.</p>","your_privacy_title":"Eich preifatrwydd"}}')
}, function (e, n, o) {
    var t = o(18);
    "string" == typeof t && (t = [[e.i, t, ""]]);
    var i = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    o(1)(t, i);
    t.locals && (e.exports = t.locals)
}, function (e, n, o) {
    (e.exports = o(0)(!1)).push([e.i, '/*\n*****\nRESET STYLES\n*****\n */\n.m-0 {\n  margin: 0 !important; }\n\n.mt-0,\n.my-0 {\n  margin-top: 0 !important; }\n\n.mr-0,\n.mx-0 {\n  margin-right: 0 !important; }\n\n.mb-0,\n.my-0 {\n  margin-bottom: 0 !important; }\n\n.ml-0,\n.mx-0 {\n  margin-left: 0 !important; }\n\n.m-1 {\n  margin: 0.25rem !important; }\n\n.mt-1,\n.my-1 {\n  margin-top: 0.25rem !important; }\n\n.mr-1,\n.mx-1 {\n  margin-right: 0.25rem !important; }\n\n.mb-1,\n.my-1 {\n  margin-bottom: 0.25rem !important; }\n\n.ml-1,\n.mx-1 {\n  margin-left: 0.25rem !important; }\n\n.m-2 {\n  margin: 0.5rem !important; }\n\n.mt-2,\n.my-2 {\n  margin-top: 0.5rem !important; }\n\n.mr-2,\n.mx-2 {\n  margin-right: 0.5rem !important; }\n\n.mb-2,\n.my-2 {\n  margin-bottom: 0.5rem !important; }\n\n.ml-2,\n.mx-2 {\n  margin-left: 0.5rem !important; }\n\n.m-3 {\n  margin: 1rem !important; }\n\n.mt-3,\n.my-3 {\n  margin-top: 1rem !important; }\n\n.mr-3,\n.mx-3 {\n  margin-right: 1rem !important; }\n\n.mb-3,\n.my-3 {\n  margin-bottom: 1rem !important; }\n\n.ml-3,\n.mx-3 {\n  margin-left: 1rem !important; }\n\n.m-4 {\n  margin: 1.5rem !important; }\n\n.mt-4,\n.my-4 {\n  margin-top: 1.5rem !important; }\n\n.mr-4,\n.mx-4 {\n  margin-right: 1.5rem !important; }\n\n.mb-4,\n.my-4 {\n  margin-bottom: 1.5rem !important; }\n\n.ml-4,\n.mx-4 {\n  margin-left: 1.5rem !important; }\n\n.m-5 {\n  margin: 3rem !important; }\n\n.mt-5,\n.my-5 {\n  margin-top: 3rem !important; }\n\n.mr-5,\n.mx-5 {\n  margin-right: 3rem !important; }\n\n.mb-5,\n.my-5 {\n  margin-bottom: 3rem !important; }\n\n.ml-5,\n.mx-5 {\n  margin-left: 3rem !important; }\n\n.p-0 {\n  padding: 0 !important; }\n\n.pt-0,\n.py-0 {\n  padding-top: 0 !important; }\n\n.pr-0,\n.px-0 {\n  padding-right: 0 !important; }\n\n.pb-0,\n.py-0 {\n  padding-bottom: 0 !important; }\n\n.pl-0,\n.px-0 {\n  padding-left: 0 !important; }\n\n.p-1 {\n  padding: 0.25rem !important; }\n\n.pt-1,\n.py-1 {\n  padding-top: 0.25rem !important; }\n\n.pr-1,\n.px-1 {\n  padding-right: 0.25rem !important; }\n\n.pb-1,\n.py-1 {\n  padding-bottom: 0.25rem !important; }\n\n.pl-1,\n.px-1 {\n  padding-left: 0.25rem !important; }\n\n.p-2 {\n  padding: 0.5rem !important; }\n\n.pt-2,\n.py-2 {\n  padding-top: 0.5rem !important; }\n\n.pr-2,\n.px-2 {\n  padding-right: 0.5rem !important; }\n\n.pb-2,\n.py-2 {\n  padding-bottom: 0.5rem !important; }\n\n.pl-2,\n.px-2 {\n  padding-left: 0.5rem !important; }\n\n.p-3 {\n  padding: 1rem !important; }\n\n.pt-3,\n.py-3 {\n  padding-top: 1rem !important; }\n\n.pr-3,\n.px-3 {\n  padding-right: 1rem !important; }\n\n.pb-3,\n.py-3 {\n  padding-bottom: 1rem !important; }\n\n.pl-3,\n.px-3 {\n  padding-left: 1rem !important; }\n\n.p-4 {\n  padding: 1.5rem !important; }\n\n.pt-4,\n.py-4 {\n  padding-top: 1.5rem !important; }\n\n.pr-4,\n.px-4 {\n  padding-right: 1.5rem !important; }\n\n.pb-4,\n.py-4 {\n  padding-bottom: 1.5rem !important; }\n\n.pl-4,\n.px-4 {\n  padding-left: 1.5rem !important; }\n\n.p-5 {\n  padding: 3rem !important; }\n\n.pt-5,\n.py-5 {\n  padding-top: 3rem !important; }\n\n.pr-5,\n.px-5 {\n  padding-right: 3rem !important; }\n\n.pb-5,\n.py-5 {\n  padding-bottom: 3rem !important; }\n\n.pl-5,\n.px-5 {\n  padding-left: 3rem !important; }\n\n.m-auto {\n  margin: auto !important; }\n\n.mt-auto,\n.my-auto {\n  margin-top: auto !important; }\n\n.mr-auto,\n.mx-auto {\n  margin-right: auto !important; }\n\n.mb-auto,\n.my-auto {\n  margin-bottom: auto !important; }\n\n.ml-auto,\n.mx-auto {\n  margin-left: auto !important; }\n\n.cc_css_reboot {\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: transparent;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #fff; }\n  .cc_css_reboot *,\n  .cc_css_reboot *::before,\n  .cc_css_reboot *::after {\n    box-sizing: border-box; }\n  .cc_css_reboot a,\n  .cc_css_reboot li,\n  .cc_css_reboot p,\n  .cc_css_reboot h1,\n  .cc_css_reboot h2,\n  .cc_css_reboot h3,\n  .cc_css_reboot h4,\n  .cc_css_reboot h5,\n  .cc_css_reboot h6,\n  .cc_css_reboot input,\n  .cc_css_reboot button,\n  .cc_css_reboot select {\n    border-style: none;\n    box-shadow: none;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n    outline: none; }\n\n@-ms-viewport {\n  .cc_css_reboot {\n    width: device-width; } }\n  .cc_css_reboot article, .cc_css_reboot aside, .cc_css_reboot figcaption, .cc_css_reboot figure, .cc_css_reboot footer, .cc_css_reboot header, .cc_css_reboot hgroup, .cc_css_reboot main, .cc_css_reboot nav, .cc_css_reboot section {\n    display: block; }\n  .cc_css_reboot [tabindex="-1"]:focus {\n    outline: 0 !important; }\n  .cc_css_reboot hr {\n    box-sizing: content-box;\n    height: 0;\n    overflow: visible; }\n  .cc_css_reboot h1, .cc_css_reboot h2, .cc_css_reboot h3, .cc_css_reboot h4, .cc_css_reboot h5, .cc_css_reboot h6 {\n    margin-top: 0;\n    margin-bottom: 0.5rem;\n    color: #000; }\n  .cc_css_reboot p {\n    margin-top: 0;\n    margin-bottom: 1rem; }\n  .cc_css_reboot abbr[title],\n  .cc_css_reboot abbr[data-original-title] {\n    text-decoration: underline;\n    -webkit-text-decoration: underline dotted;\n    text-decoration: underline dotted;\n    cursor: help;\n    border-bottom: 0; }\n  .cc_css_reboot address {\n    margin-bottom: 1rem;\n    font-style: normal;\n    line-height: inherit; }\n  .cc_css_reboot div {\n    display: block; }\n  .cc_css_reboot ol,\n  .cc_css_reboot ul,\n  .cc_css_reboot dl {\n    margin-top: 0;\n    margin-bottom: 1rem; }\n  .cc_css_reboot ol ol,\n  .cc_css_reboot ul ul,\n  .cc_css_reboot ol ul,\n  .cc_css_reboot ul ol {\n    margin-bottom: 0; }\n  .cc_css_reboot b,\n  .cc_css_reboot strong {\n    font-weight: bolder; }\n  .cc_css_reboot small {\n    font-size: 80%; }\n  .cc_css_reboot sub,\n  .cc_css_reboot sup {\n    position: relative;\n    font-size: 75%;\n    line-height: 0;\n    vertical-align: baseline; }\n  .cc_css_reboot sub {\n    bottom: -.25em; }\n  .cc_css_reboot sup {\n    top: -.5em; }\n  .cc_css_reboot a {\n    color: #007bff;\n    text-decoration: none;\n    background-color: transparent;\n    -webkit-text-decoration-skip: objects; }\n  .cc_css_reboot a:hover {\n    color: #0056b3;\n    text-decoration: underline; }\n  .cc_css_reboot a:not([href]):not([tabindex]) {\n    color: inherit;\n    text-decoration: none; }\n  .cc_css_reboot a:not([href]):not([tabindex]):hover, .cc_css_reboot a:not([href]):not([tabindex]):focus {\n    color: inherit;\n    text-decoration: none; }\n  .cc_css_reboot a:not([href]):not([tabindex]):focus {\n    outline: 0; }\n  .cc_css_reboot img {\n    vertical-align: middle;\n    border-style: none; }\n  .cc_css_reboot svg:not(:root) {\n    overflow: hidden; }\n  .cc_css_reboot table {\n    border-collapse: collapse; }\n  .cc_css_reboot caption {\n    padding-top: 0.75rem;\n    padding-bottom: 0.75rem;\n    color: #6c757d;\n    text-align: left;\n    caption-side: bottom; }\n  .cc_css_reboot th {\n    text-align: inherit; }\n  .cc_css_reboot label {\n    display: inline-block;\n    margin-bottom: 0.5rem; }\n  .cc_css_reboot button {\n    border-radius: 2px;\n    padding: .5rem 1rem;\n    outline: none;\n    background: #dcdae5;\n    color: #111;\n    cursor: pointer;\n    border: none;\n    transition: all ease .3s; }\n    .cc_css_reboot button:focus {\n      outline: none; }\n  .cc_css_reboot select {\n    border-style: none; }\n  .cc_css_reboot input,\n  .cc_css_reboot button,\n  .cc_css_reboot select,\n  .cc_css_reboot optgroup,\n  .cc_css_reboot textarea {\n    margin: 0;\n    font-family: inherit;\n    font-size: inherit;\n    line-height: inherit; }\n  .cc_css_reboot button,\n  .cc_css_reboot input {\n    overflow: visible; }\n  .cc_css_reboot button,\n  .cc_css_reboot select {\n    text-transform: none; }\n  .cc_css_reboot button,\n  .cc_css_reboot html [type="button"],\n  .cc_css_reboot [type="reset"],\n  .cc_css_reboot [type="submit"] {\n    -webkit-appearance: button; }\n  .cc_css_reboot button::-moz-focus-inner,\n  .cc_css_reboot [type="button"]::-moz-focus-inner,\n  .cc_css_reboot [type="reset"]::-moz-focus-inner,\n  .cc_css_reboot [type="submit"]::-moz-focus-inner {\n    padding: 0;\n    border-style: none; }\n  .cc_css_reboot input[type="radio"],\n  .cc_css_reboot input[type="checkbox"] {\n    box-sizing: border-box;\n    padding: 0; }\n  .cc_css_reboot input[type="date"],\n  .cc_css_reboot input[type="time"],\n  .cc_css_reboot input[type="datetime-local"],\n  .cc_css_reboot input[type="month"] {\n    -webkit-appearance: listbox; }\n  .cc_css_reboot textarea {\n    overflow: auto;\n    resize: vertical; }\n  .cc_css_reboot fieldset {\n    min-width: 0;\n    padding: 0;\n    margin: 0;\n    border: 0; }\n  .cc_css_reboot legend {\n    display: block;\n    width: 100%;\n    max-width: 100%;\n    padding: 0;\n    margin-bottom: .5rem;\n    font-size: 1.5rem;\n    line-height: inherit;\n    color: inherit;\n    white-space: normal; }\n  .cc_css_reboot progress {\n    vertical-align: baseline; }\n  .cc_css_reboot [type="number"]::-webkit-inner-spin-button,\n  .cc_css_reboot [type="number"]::-webkit-outer-spin-button {\n    height: auto; }\n  .cc_css_reboot [type="search"] {\n    outline-offset: -2px;\n    -webkit-appearance: none; }\n  .cc_css_reboot [type="search"]::-webkit-search-cancel-button,\n  .cc_css_reboot [type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none; }\n  .cc_css_reboot ::-webkit-file-upload-button {\n    font: inherit;\n    -webkit-appearance: button; }\n  .cc_css_reboot [hidden] {\n    display: none !important; }\n', ""])
}, function (e, n) {
    e.exports = function (e) {
        var n = "undefined" != typeof window && window.location;
        if (!n) throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e) return e;
        var o = n.protocol + "//" + n.host,
            t = o + n.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, n) {
            var i, a = n.trim().replace(/^"(.*)"$/, function (e, n) {
                return n
            }).replace(/^'(.*)'$/, function (e, n) {
                return n
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a) ? e : (i = 0 === a.indexOf("//") ? a : 0 === a.indexOf("/") ? o + a : t + a.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")")
        })
    }
}, function (e, n, o) {
    var t = o(21);
    "string" == typeof t && (t = [[e.i, t, ""]]);
    var i = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    o(1)(t, i);
    t.locals && (e.exports = t.locals)
}, function (e, n, o) {
    (e.exports = o(0)(!1)).push([e.i, '/*\n\nCookie Consent\n\n */\n.cc_overlay_lock {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  z-index: 9999999999; }\n  .cc_overlay_lock.hidden {\n    display: none; }\n\n.cc_dialog {\n  background-color: #f2f2f2;\n  color: #111;\n  z-index: 99999999999;\n  font-size: 16px; }\n  .cc_dialog.hidden {\n    display: none; }\n  .cc_dialog.headline {\n    right: 0;\n    top: 0;\n    bottom: auto;\n    left: 0;\n    max-width: 100%;\n    position: relative; }\n  .cc_dialog.simple {\n    right: 0;\n    top: auto;\n    bottom: 0;\n    left: auto;\n    max-width: 50%;\n    position: fixed; }\n  .cc_dialog.interstitial {\n    right: 3vw;\n    top: 3vh;\n    left: 3vw;\n    max-width: 100%;\n    position: fixed; }\n  .cc_dialog.standalone {\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%; }\n  .cc_dialog .cc_dialog_headline {\n    font-size: 24px;\n    font-weight: 600; }\n  .cc_dialog .cc_dialog_text {\n    font-size: 16px; }\n  .cc_dialog button {\n    font-weight: bold;\n    font-size: 14px; }\n    .cc_dialog button.cc_b_ok {\n      background-color: #008000;\n      color: #fff; }\n      .cc_dialog button.cc_b_ok:active {\n        background: #136d13; }\n    .cc_dialog button.cc_b_cp {\n      background-color: #eaeaea;\n      color: #111; }\n      .cc_dialog button.cc_b_cp:active {\n        background: #f2f2f2; }\n\n.cookie-consent-preferences-overlay {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 999999999999;\n  top: 0;\n  left: 0;\n  display: none; }\n  .cookie-consent-preferences-overlay.visible {\n    display: block; }\n  .cookie-consent-preferences-overlay .cookie-consent-preferences-dialog {\n    position: absolute;\n    margin: 30px auto;\n    width: 750px;\n    max-width: 90%;\n    height: auto;\n    left: 0;\n    right: 0; }\n    .cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container {\n      width: 100%;\n      display: flex;\n      background: #fff;\n      flex-direction: column; }\n      .cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container > div {\n        width: 100%; }\n      .cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head {\n        background: #fff;\n        color: #111;\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between; }\n        .cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_title {\n          display: flex;\n          padding-left: 15px;\n          flex-direction: column;\n          justify-content: center;\n          align-items: baseline; }\n          .cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_title h2,\n          .cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_title p {\n            margin: 0; }\n          .cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_title p {\n            font-size: 16px;\n            line-height: 1.5; }\n          .cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_title h2 {\n            font-size: 20px;\n            font-weight: 600; }\n        .cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_lang_selector {\n          display: flex;\n          align-items: center;\n          padding-right: 15px;\n          min-height: 80px;\n          justify-content: center; }\n      .cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content {\n        display: flex;\n        flex-direction: row;\n        align-items: stretch;\n        background: #292929;\n        color: #f5f5f5;\n        border-bottom: none; }\n        .cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu {\n          font-family: Arial, sans-serif !important;\n          width: 150px;\n          margin: 0;\n          padding: 0;\n          background: #e6e6e6;\n          min-width: 150px; }\n          .cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li {\n            margin: 0;\n            padding: 0;\n            float: left;\n            display: block;\n            width: 100%;\n            color: #666;\n            background: #e6e6e6;\n            border-bottom: 1px solid #ccc;\n            border-right: 1px solid #ccc;\n            transition: all ease .1s;\n            box-sizing: content-box; }\n            .cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li[active=true] {\n              background: #292929;\n              color: #f5f5f5; }\n            .cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li a {\n              text-decoration: none;\n              color: #666;\n              display: block;\n              padding: 10px 5px 10px 10px;\n              font-weight: 700;\n              font-size: 12px;\n              line-height: 19px; }\n        .cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content {\n          background: #292929 !important;\n          color: #f5f5f5; }\n          .cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content .cc_cp_m_content_entry {\n            width: 100%;\n            display: none;\n            padding: 25px;\n            box-sizing: border-box; }\n            .cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content .cc_cp_m_content_entry[active=true] {\n              display: block; }\n            .cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content .cc_cp_m_content_entry h1 {\n              font-size: 24px;\n              font-weight: 600; }\n            .cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content .cc_cp_m_content_entry p {\n              font-size: 16px;\n              line-height: 1.5; }\n      .cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer {\n        background: #f2f2f2;\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        border-top: 1px solid #ccc;\n        justify-content: space-between; }\n        .cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_powered_by {\n          padding: 20px 10px;\n          font-size: 14px;\n          color: #333;\n          display: block !important; }\n          .cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_powered_by a {\n            color: #999; }\n        .cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_save button {\n          margin-right: 10px;\n          opacity: .9;\n          transition: all ease .3s;\n          font-size: 14px;\n          font-weight: bold;\n          height: auto; }\n          .cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_save button:hover {\n            opacity: 1; }\n  .cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent {\n    position: absolute;\n    margin: 2px 0 0 16px;\n    cursor: pointer; }\n    .cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent + label {\n      position: relative;\n      padding: 4px 0 0 50px;\n      line-height: 2.0em;\n      cursor: pointer;\n      display: inline;\n      font-size: 14px; }\n      .cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent + label:before {\n        content: "";\n        position: absolute;\n        display: block;\n        left: 0;\n        top: 0;\n        width: 40px;\n        /* x*5 */\n        height: 24px;\n        /* x*3 */\n        border-radius: 16px;\n        /* x*2 */\n        background: #fff;\n        border: 1px solid #d9d9d9;\n        -webkit-transition: all 0.3s;\n        transition: all 0.3s; }\n      .cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent + label:after {\n        content: "";\n        position: absolute;\n        display: block;\n        left: 0px;\n        top: 0px;\n        width: 24px;\n        /* x*3 */\n        height: 24px;\n        /* x*3 */\n        border-radius: 16px;\n        /* x*2 */\n        background: #fff;\n        border: 1px solid #d9d9d9;\n        -webkit-transition: all 0.3s;\n        transition: all 0.3s; }\n      .cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent + label:hover:after {\n        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); }\n    .cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent:checked + label:after {\n      margin-left: 16px; }\n    .cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent:checked + label:before {\n      background: #55D069; }\n  .cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent-sm {\n    position: absolute;\n    margin: 5px 0 0 10px; }\n    .cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent-sm + label {\n      position: relative;\n      padding: 0 0 0 32px;\n      line-height: 1.3em; }\n      .cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent-sm + label:before {\n        content: "";\n        position: absolute;\n        display: block;\n        left: 0;\n        top: 0;\n        background: #fff;\n        border: 1px solid #d9d9d9;\n        -webkit-transition: all 0.3s;\n        transition: all 0.3s;\n        width: 25px;\n        /* x*5 */\n        height: 15px;\n        /* x*3 */\n        border-radius: 10px;\n        /* x*2 */ }\n      .cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent-sm + label:after {\n        content: "";\n        position: absolute;\n        display: block;\n        left: 0px;\n        top: 0px;\n        background: #fff;\n        border: 1px solid #d9d9d9;\n        -webkit-transition: all 0.3s;\n        transition: all 0.3s;\n        width: 15px;\n        /* x*3 */\n        height: 15px;\n        /* x*3 */\n        border-radius: 10px;\n        /* x*2 */ }\n      .cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent-sm + label:hover:after {\n        box-shadow: 0 0 3px rgba(0, 0, 0, 0.3); }\n    .cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent-sm:checked + label:after {\n      margin-left: 10px; }\n    .cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent-sm:checked + label:before {\n      background: #55D069; }\n\n@media screen and (max-width: 600px) {\n  .cookie-consent-preferences-overlay {\n    overflow-y: scroll; }\n    .cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head {\n      flex-direction: column; }\n      .cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_title {\n        align-items: center;\n        padding: 15px 0 0 0; }\n      .cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_lang_selector {\n        padding: 15px 0;\n        min-height: 20px; }\n    .cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content {\n      flex-direction: column; }\n      .cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu {\n        width: 100%; }\n        .cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li {\n          border-right: 0; } }\n', ""])
}, function (e, n, o) {
    var t = o(23);
    "string" == typeof t && (t = [[e.i, t, ""]]);
    var i = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    o(1)(t, i);
    t.locals && (e.exports = t.locals)
}, function (e, n, o) {
    (e.exports = o(0)(!1)).push([e.i, ".dark.cc_dialog {\n  background-color: #111;\n  color: #fff; }\n  .dark.cc_dialog .cc_dialog_headline {\n    color: #fff; }\n  .dark.cc_dialog .cc_dialog_text {\n    color: #fff; }\n  .dark.cc_dialog button.cc_b_ok {\n    color: #000;\n    background-color: #ff0; }\n  .dark.cc_dialog button.cc_b_cp {\n    background-color: #eaeaea;\n    color: #111; }\n\n.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container {\n  background: #212121; }\n  .dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head {\n    background: #212121;\n    color: #fff; }\n    .dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head h2 {\n      color: #fff; }\n    .dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head p {\n      color: #fff; }\n    .dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_lang_selector select {\n      color: #212121; }\n  .dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content {\n    background: #292929 !important;\n    color: #f5f5f5; }\n    .dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu {\n      color: #666;\n      background: #e6e6e6; }\n      .dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li {\n        border-right-color: #ccc;\n        border-bottom-color: #ccc; }\n        .dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li[active=true] {\n          background: #292929 !important; }\n          .dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li[active=true] a {\n            color: #f5f5f5 !important; }\n        .dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li a {\n          color: #666; }\n    .dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content {\n      background: #292929 !important;\n      color: #f5f5f5; }\n      .dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content h1 {\n        color: #fff; }\n      .dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content p {\n        color: #fff; }\n      .dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content a {\n        color: #cce5ff; }\n  .dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer {\n    background: #212121;\n    border-top-color: #111; }\n    .dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_powered_by {\n      color: #fff; }\n    .dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_save button {\n      background: #ff0;\n      color: #000; }\n", ""])
}, function (e, n, o) {
    var t = o(25);
    "string" == typeof t && (t = [[e.i, t, ""]]);
    var i = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    o(1)(t, i);
    t.locals && (e.exports = t.locals)
}, function (e, n, o) {
    (e.exports = o(0)(!1)).push([e.i, ".light.cc_dialog {\n  background-color: #f2f2f2;\n  color: #111; }\n  .light.cc_dialog .cc_dialog_headline {\n    color: #111; }\n  .light.cc_dialog .cc_dialog_text {\n    color: #111; }\n  .light.cc_dialog button.cc_b_ok {\n    color: #fff;\n    background-color: #008000; }\n  .light.cc_dialog button.cc_b_cp {\n    background-color: #eaeaea;\n    color: #111; }\n\n.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container {\n  background: #fff; }\n  .light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head {\n    background: #fff;\n    color: #111;\n    border-bottom: 1px solid #ccc; }\n    .light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head h2 {\n      color: #111; }\n    .light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head p {\n      color: #111; }\n    .light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_lang_selector select {\n      color: #111; }\n  .light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content {\n    background: #fbfbfb !important;\n    color: #111111; }\n    .light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu {\n      color: #666;\n      background: #e6e6e6; }\n      .light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li {\n        border-right-color: #ccc;\n        border-bottom-color: #ccc; }\n        .light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li[active=true] {\n          background: #fbfbfb !important; }\n          .light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li[active=true] a {\n            color: #111 !important; }\n        .light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li a {\n          color: #666; }\n    .light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content {\n      background: #fbfbfb !important;\n      color: #111111; }\n      .light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content h1 {\n        color: #111; }\n      .light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content p {\n        color: #111; }\n      .light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content a {\n        color: #007bff; }\n  .light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer {\n    background: #f2f2f2;\n    border-top-color: #ccc; }\n    .light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_powered_by {\n      color: #111; }\n    .light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_save button {\n      background: #008000;\n      color: #FFF; }\n", ""])
}, function (e, n, o) {
    "use strict";
    o.r(n);
    o(17), o(20), o(22), o(24);
    var t = function () {
            function e() {}
            return e.insertCss = function (e) {
                var n = document.querySelector("head"),
                    o = document.createElement("link");
                o.setAttribute("href", e), o.setAttribute("rel", "stylesheet"), o.setAttribute("type", "text/css"), n.appendChild(o)
            }, e.appendChild = function (e, n, o) {
                var t, i;
                return void 0 === o && (o = null), t = "string" == typeof e ? document.querySelector(e) : e, i = "string" == typeof n ? document.querySelector(n) : n, "afterbegin" === o ? t.insertAdjacentElement("afterbegin", i) : t.insertAdjacentElement("beforeend", i), !0
            }, e.setCookie = function (e, n, o) {
                void 0 === o && (o = 62);
                var t = new Date;
                t.setTime(t.getTime() + 24 * o * 60 * 60 * 1e3);
                var i = "; expires=" + t.toUTCString();
                return document.cookie = e + "=" + (n || "") + i + "; path=/", !0
            }, e.getCookie = function (e) {
                for (var n = e + "=", o = document.cookie.split(";"), t = 0; t < o.length; t++) {
                    for (var i = o[t];
                        " " === i.charAt(0);) i = i.substring(1, i.length);
                    if (0 === i.indexOf(n)) return i.substring(n.length, i.length)
                }
                return null
            }, e.removeCookie = function (e) {
                document.cookie = e + "=; Max-Age=-99999999;"
            }, e.registerEvent = function (e) {
                var n = document.createEvent("Event");
                return n.initEvent(e, !0, !0), n
            }, e.searchObjectsArray = function (e, n, o) {
                for (var t in e) {
                    if (e[t][n] === o) return !0
                }
                return !1
            }, e.magicTransform = function (e) {
                return decodeURIComponent(atob(e).split("").map(function (e) {
                    return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
                }).join(""))
            }, e.isValidUrl = function (e) {
                return new RegExp("^(https?:\\/\\/)((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i").test(e)
            }, e
        }(),
        i = o(2),
        a = o(3),
        r = o(4),
        s = o(5),
        c = o(6),
        l = o(7),
        p = o(8),
        d = o(9),
        u = o(10),
        m = o(11),
        k = o(12),
        f = o(13),
        g = o(14),
        v = o(15),
        h = o(16),
        _ = function () {
            function e(e) {
                this.cookieConsent = e, this.userLang = "en", this.initAvailableLanguages(), this.initDefaultTranslations(), this.detectUserLanguage()
            }
            return e.prototype.detectUserLanguage = function () {
                var e = "en";
                if (void 0 !== (e = void 0 !== navigator.languages ? navigator.languages[0] : navigator.language)) {
                    if (e.indexOf("-") > 0) {
                        var n = e.split("-");
                        e = n[0]
                    }
                    this.cookieConsent.log("[i18n] Detected user default language: " + e, "info")
                } else e = this.cookieConsent.ownerSiteLanguage;
                var o = e.toLowerCase.toString();
                this.availableTranslations[o] ? this.userLang = o : this.availableTranslations[this.cookieConsent.ownerSiteLanguage] ? this.userLang = this.cookieConsent.ownerSiteLanguage : this.userLang = "en"
            }, e.prototype.initDefaultTranslations = function () {
                this.availableTranslations = {
                    en: i,
                    de: a,
                    fr: r,
                    es: s,
                    it: c,
                    pt: l,
                    hu: p,
                    hr: d,
                    da: u,
                    ro: m,
                    sl: k,
                    pl: f,
                    sr: g,
                    el: v,
                    cy: h
                }, this.cookieConsent.log("[i18n] Default translations initialized", "info")
            }, e.prototype.initAvailableLanguages = function () {
                this.availableLanguages = [{
                    value: "en",
                    title: "English"
                }, {
                    value: "de",
                    title: "German"
                }, {
                    value: "fr",
                    title: "French"
                }, {
                    value: "es",
                    title: "Spanish"
                }, {
                    value: "it",
                    title: "Italian"
                }, {
                    value: "pt",
                    title: "Portugese"
                }, {
                    value: "hu",
                    title: "Hungarian"
                }, {
                    value: "hr",
                    title: "Croatian"
                }, {
                    value: "da",
                    title: "Danish"
                }, {
                    value: "ro",
                    title: "Romanian"
                }, {
                    value: "sl",
                    title: "Slovenian"
                }, {
                    value: "pl",
                    title: "Polish"
                }, {
                    value: "sr",
                    title: "Serbian"
                }, {
                    value: "el",
                    title: "Greek"
                }, {
                    value: "cy",
                    title: "Welsh"
                }], this.cookieConsent.log("[i18n] Default languages initialized", "info")
            }, e.prototype.$t = function (e, n, o) {
                void 0 === o && (o = null);
                var t = this.availableTranslations[this.userLang][e][n];
                return "string" == typeof o ? t = t.replace("%s", o) : Array.isArray(o) && o.map(function (e, n) {
                    var i = o[n];
                    t = t.replace("%s", i)
                }), t || ""
            }, e
        }();
    o.d(n, "run", function () {
        return B
    }), o.d(n, "consentDebugger", function () {
        return y
    });
    var b, y, w = (b = function (e, n) {
            return (b = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (e, n) {
                    e.__proto__ = n
                } || function (e, n) {
                    for (var o in n) n.hasOwnProperty(o) && (e[o] = n[o])
                })(e, n)
        }, function (e, n) {
            function o() {
                this.constructor = e
            }
            b(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
        }),
        z = function () {
            function e(e) {
                this.scripts = {}, this.cookieConsent = e, this.cookieConsent.log("Javascript items initialized.", "info"), this.readScripts()
            }
            return e.prototype.readScripts = function () {
                var e = document.querySelectorAll('script[type="text/plain"]');
                for (var n in e) {
                    var o = e[n];
                    "object" == typeof o && this._noticeScriptIfValid(o)
                }
            }, e.prototype._noticeScriptIfValid = function (e) {
                var n = e.getAttribute("cookie-consent");
                !0 === t.searchObjectsArray(this.cookieConsent.cookieLevels.cookieLevels, "id", n) ? (this.cookieConsent.log("Javascript with valid cookie consent found", "info"), this.cookieConsent.log(e, "info"), void 0 === this.scripts[n] && (this.scripts[n] = []), this.scripts[n].push(e)) : this.cookieConsent.log("Invalid cookie consent level for javascript sript: " + n, "warning")
            }, e.prototype.enableScriptsByLevel = function (e) {
                for (var n in this.scripts[e]) try {
                    var o = this.scripts[e][n],
                        i = document.createElement("script");
                    i.setAttribute("type", "text/javascript"), i.setAttribute("initial-cookie-consent", o.getAttribute("cookie-consent")), null !== o.getAttribute("src") && i.setAttribute("src", o.getAttribute("src")), i.text = o.innerHTML, t.appendChild("head", i), o.parentNode.removeChild(o), delete this.scripts[e][n]
                } catch (e) {
                    this.cookieConsent.log("Got an error while trying to activate a script template, message: " + e.message.toString(), "log")
                }
            }, e
        }(),
        j = function () {
            function e(e) {
                this.acceptedLevels = {}, this.userAccepted = !1, this.consentLevelCookieName = "cookie_consent_level", this.consentAcceptedCookieName = "cookie_consent_user_accepted", this.loadCookiesUntilAndInclude = "strictly-necessary", this.cookieConsent = e, this.cookieConsent.log("UserConsent initialized.", "info"), this.checkIfUserAccepted(), this.getUserLevels()
            }
            return e.prototype.checkIfUserAccepted = function () {
                "true" === t.getCookie(this.consentAcceptedCookieName) && (this.userAccepted = !0)
            }, e.prototype.markUserAccepted = function () {
                this.userAccepted = !0, !1 === this.cookieConsent.isDemo && t.setCookie(this.consentAcceptedCookieName, "true")
            }, e.prototype.getUserLevels = function () {
                var e = t.getCookie(this.consentLevelCookieName),
                    n = {};
                try {
                    n = JSON.parse(decodeURIComponent(e))
                } catch (e) {
                    n = null
                }
                if (null === n) document.dispatchEvent(this.cookieConsent.events.cc_freshUser), this.enableAllCookies();
                else {
                    for (var o in this.cookieConsent.cookieLevels.cookieLevels) {
                        var i = this.cookieConsent.cookieLevels.cookieLevels[o].id;
                        !0 === n[i] ? this.acceptedLevels[i] = !0 : this.acceptedLevels[i] = !1, this.saveCookie()
                    }
                    this.cookieConsent.log(this.acceptedLevels, "info", "table")
                }
            }, e.prototype.enableAllCookies = function () {
                for (var e in this.cookieConsent.cookieLevels.cookieLevels) {
                    var n = this.cookieConsent.cookieLevels.cookieLevels[e].id;
                    this.acceptLevel(n)
                }
            }, e.prototype.loadCookiesUntilMaxLevel = function () {
                var e = !1;
                for (var n in this.cookieConsent.cookieLevels.cookieLevels) {
                    if (e) break;
                    var o = this.cookieConsent.cookieLevels.cookieLevels[n].id;
                    o === this.loadCookiesUntilAndInclude && (e = !0), !1 !== this.acceptedLevels[o] && this.cookieConsent.javascriptItems.enableScriptsByLevel(o)
                }
            }, e.prototype.loadAcceptedCookies = function () {
                for (var e in this.cookieConsent.cookieLevels.cookieLevels) {
                    var n = this.cookieConsent.cookieLevels.cookieLevels[e].id;
                    !1 !== this.acceptedLevels[n] && this.cookieConsent.javascriptItems.enableScriptsByLevel(n)
                }
            }, e.prototype.checkIsAccepted = function (e) {
                var n = !1;
                return e in this.acceptedLevels && !0 === this.acceptedLevels[e] && (n = !0), n
            }, e.prototype.acceptLevel = function (e) {
                return this.cookieConsent.log("Accepted cookie level: " + e, "info"), this.acceptedLevels[e] = !0, this.saveCookie()
            }, e.prototype.rejectLevel = function (e) {
                return this.cookieConsent.log("Rejected cookie level: " + e, "info"), this.acceptedLevels[e] = !1, this.saveCookie()
            }, e.prototype.saveCookie = function () {
                var e = encodeURIComponent(JSON.stringify(this.acceptedLevels));
                return t.setCookie(this.consentLevelCookieName, e), this.cookieConsent.log("Saved cookies containing the user consent level", "info"), !0
            }, e
        }(),
        C = function () {
            this.cc_dialogShown = t.registerEvent("cc_dialogShown"), this.cc_dialogOkPressed = t.registerEvent("cc_dialogOkPressed"), this.cc_dialogPreferencesPressed = t.registerEvent("cc_dialogPreferencesPressed"), this.cc_userLanguageChanged = t.registerEvent("cc_userLanguageChanged"), this.cc_preferencesSavePressed = t.registerEvent("cc_preferencesSavePressed"), this.cc_freshUser = t.registerEvent("cc_freshUser"), this.cc_userChangedConsent = t.registerEvent("cc_userChangedConsent")
        },
        x = function () {
            function e(e) {
                this.cookieConsent = e, this.cc_dialogShown(), this.cc_dialogOkPressed(), this.cc_dialogPreferencesPressed(), this.cc_userLanguageChanged(), this.cc_preferencesSavePressed(), this.cc_freshUser(), this.cc_userChangedConsent()
            }
            return e.prototype.cc_dialogShown = function () {
                var e = this;
                window.addEventListener("cc_dialogShown", function () {
                    e.cookieConsent.log("cc_dialogShown triggered", "event")
                })
            }, e.prototype.cc_dialogOkPressed = function () {
                var e = this;
                document.addEventListener("cc_dialogOkPressed", function () {
                    e.cookieConsent.log("cc_dialogOkPressed triggered", "event"), e.cookieConsent.consentType instanceof U ? (e.cookieConsent.userConsent.markUserAccepted(), e.cookieConsent.userConsent.loadAcceptedCookies()) : e.cookieConsent.userConsent.markUserAccepted(), e.cookieConsent.consentBanner.hideDialog()
                })
            }, e.prototype.cc_dialogPreferencesPressed = function () {
                var e = this;
                window.addEventListener("cc_dialogPreferencesPressed", function () {
                    e.cookieConsent.log("cc_dialogPreferencesPressed triggered", "event"), e.cookieConsent.consentPreferences.showPreferences()
                })
            }, e.prototype.cc_userLanguageChanged = function () {
                var e = this;
                window.addEventListener("cc_userLanguageChanged", function () {
                    e.cookieConsent.log("cc_userLanguageChanged triggered", "event")
                })
            }, e.prototype.cc_preferencesSavePressed = function () {
                var e = this;
                window.addEventListener("cc_preferencesSavePressed", function () {
                    e.cookieConsent.log("cc_preferencesSavePressed triggered", "event"), e.cookieConsent.userConsent.markUserAccepted(), e.cookieConsent.userConsent.loadAcceptedCookies(), e.cookieConsent.consentPreferences.hidePreferences(), e.cookieConsent.consentBanner.hideDialog()
                })
            }, e.prototype.cc_freshUser = function () {
                var e = this;
                window.addEventListener("cc_freshUser", function () {
                    e.cookieConsent.log("cc_freshUser triggered", "event")
                })
            }, e.prototype.cc_userChangedConsent = function () {
                var e = this;
                window.addEventListener("cc_userChangedConsent", function () {
                    e.cookieConsent.log("cc_userChangedConsent triggered", "event")
                })
            }, e
        }(),
        L = function () {
            function e(e) {
                this.cookieConsent = e, this.initDefaultLevels(), this.initPreferenceItems()
            }
            return e.prototype.languageChanged = function () {
                this.initDefaultLevels(), this.initPreferenceItems()
            }, e.prototype.initDefaultLevels = function () {
                this.cookieLevels = [{
                    id: "strictly-necessary",
                    title: this.cookieConsent.i18n.$t("level_strictly_necessary", "title"),
                    content: this.cookieConsent.i18n.$t("level_strictly_necessary", "content")
                }, {
                    id: "functionality",
                    title: this.cookieConsent.i18n.$t("level_functionality", "title"),
                    content: this.cookieConsent.i18n.$t("level_functionality", "content")
                }, {
                    id: "tracking",
                    title: this.cookieConsent.i18n.$t("level_tracking", "title"),
                    content: this.cookieConsent.i18n.$t("level_tracking", "content")
                }, {
                    id: "targeting",
                    title: this.cookieConsent.i18n.$t("level_targeting", "title"),
                    content: this.cookieConsent.i18n.$t("level_targeting", "content")
                }]
            }, e.prototype.initPreferenceItems = function () {
                this.preferenceItems = [{
                    title: this.cookieConsent.i18n.$t("preference_center_menu_and_content", "your_privacy_title"),
                    content_container: "content_your_privacy",
                    content: this.cookieConsent.i18n.$t("preference_center_menu_and_content", "your_privacy_content")
                }];
                for (var e = 0, n = this.cookieLevels; e < n.length; e++) {
                    var o = n[e];
                    this.preferenceItems.push({
                        id: o.id,
                        title: o.title,
                        content_container: "content_" + o.id,
                        content: "\n<h1>" + o.title + "</h1>\n<p>" + o.content + "</p>\n"
                    })
                }
                this.preferenceItems.push({
                    title: this.cookieConsent.i18n.$t("preference_center_menu_and_content", "more_information_title"),
                    content_container: "content_more_information",
                    content: this.cookieConsent.i18n.$t("preference_center_menu_and_content", "more_information_content")
                }), null !== this.cookieConsent.cookiesPolicyUrl && t.isValidUrl(this.cookieConsent.cookiesPolicyUrl) && (this.preferenceItems[this.preferenceItems.length - 1].content = this.preferenceItems[this.preferenceItems.length - 1].content + this.cookieConsent.i18n.$t("dialog", "find_out_more", this.cookieConsent.cookiesPolicyUrl))
            }, e
        }(),
        E = function () {
            function e(e) {
                this.cpOverlay = null, this.cookieConsent = e
            }
            return e.prototype.listenToUserButtonToOpenPreferences = function (e) {
                var n = this,
                    o = document.querySelector(e);
                o && o.addEventListener("click", function () {
                    document.dispatchEvent(n.cookieConsent.events.cc_dialogPreferencesPressed), n.showPreferences()
                })
            }, e.prototype.showPreferences = function () {
                null === this.cpOverlay && (this.cpOverlay = this.createPreferencesOverlayAndDialog(), t.appendChild("body", this.cpOverlay)), this.cpOverlay.classList.add("visible"), this.cookieConsent.log("Cookie preferences dialog was shown", "info")
            }, e.prototype.hidePreferences = function () {
                this.cpOverlay.classList.remove("visible"), this.cookieConsent.log("Cookie preferences dialog was hidden", "info")
            }, e.prototype.refreshPreferences = function () {
                if (null !== this.cpOverlay) return this.cpOverlay.parentNode.removeChild(this.cpOverlay), this.cpOverlay = null, this.showPreferences()
            }, e.prototype.createPreferencesOverlayAndDialog = function () {
                var e = document.createElement("div");
                e.classList.add("cookie-consent-preferences-overlay"), e.classList.add(this.cookieConsent.colorPalette.getClass()), e.classList.add("cc_css_reboot");
                var n = document.createElement("div");
                n.classList.add("cookie-consent-preferences-dialog");
                var o = document.createElement("div");
                o.classList.add("cc_cp_container");
                var i = document.createElement("div");
                i.classList.add("cc_cp_head");
                var a = document.createElement("div");
                if (a.classList.add("cc_cp_head_title"), this.cookieConsent.ownerWebsiteName.length > 2) {
                    var r = document.createElement("p");
                    r.innerText = this.cookieConsent.ownerWebsiteName, t.appendChild(a, r)
                }
                var s = document.createElement("h2");
                s.innerHTML = this.cookieConsent.i18n.$t("preference_center", "title"), t.appendChild(a, s);
                var c = document.createElement("div");
                c.classList.add("cc_cp_head_lang_selector");
                var l = this.obtainLanguageSelector();
                t.appendChild(c, l), t.appendChild(i, a), t.appendChild(i, c);
                var p = document.createElement("div");
                p.classList.add("cc_cp_content");
                var d = this.getMenuContainer(),
                    u = this.getContentContainer();
                t.appendChild(p, d), t.appendChild(p, u);
                var m = this.getFooterContainer();
                return t.appendChild(o, i), t.appendChild(o, p), t.appendChild(o, m), t.appendChild(n, o), t.appendChild(e, n), e
            }, e.prototype.obtainLanguageSelector = function () {
                var e = this,
                    n = document.createElement("select");
                return [].forEach.call(e.cookieConsent.i18n.availableLanguages, function (o) {
                    var t = document.createElement("option");
                    t.text = o.title, t.value = o.value, e.cookieConsent.i18n.userLang === t.value && t.setAttribute("selected", "selected"), n.add(t)
                }), n.addEventListener("change", function () {
                    e.cookieConsent.i18n.userLang = n.value, e.cookieConsent.cookieLevels.languageChanged(), e.refreshPreferences(), document.dispatchEvent(e.cookieConsent.events.cc_userLanguageChanged)
                }), n
            }, e.prototype.getContentContainer = function () {
                var e = this,
                    n = document.createElement("div");
                n.classList.add("cc_cp_m_content");
                var o = 0;
                return e.cookieConsent.cookieLevels.preferenceItems.forEach(function (i) {
                    var a = document.createElement("div");
                    if (a.classList.add("cc_cp_m_content_entry"), a.setAttribute("content_layout", i.content_container), a.setAttribute("active", "false"), a.innerHTML = i.content, 0 === o && a.setAttribute("active", "true"), o++, i.id) {
                        var r = e._getLevelCheckbox(i);
                        t.appendChild(a, r)
                    }
                    t.appendChild(n, a)
                }), n
            }, e.prototype.getMenuContainer = function () {
                var e = this,
                    n = document.createElement("ul");
                n.classList.add("cc_cp_m_menu");
                var o = 0;
                return e.cookieConsent.cookieLevels.preferenceItems.forEach(function (i) {
                    var a = document.createElement("li"),
                        r = document.createElement("a");
                    r.setAttribute("href", "#"), r.setAttribute("t", i.content_container), r.innerHTML = i.title, 0 === o && a.setAttribute("active", "true"), o++, r.addEventListener("click", function (n) {
                        n.preventDefault(), e.cookieConsent.log("Preferences menu item clicked: " + i.title, "info");
                        var o = document.querySelectorAll('li[active="true"]');
                        [].forEach.call(o, function (e) {
                            e.setAttribute("active", "false")
                        }), a.setAttribute("active", "true");
                        try {
                            var t = document.querySelectorAll("div[content_layout]");
                            [].forEach.call(t, function (e) {
                                e.setAttribute("active", "false")
                            }), document.querySelector('div[content_layout="' + i.content_container + '"]').setAttribute("active", "true")
                        } catch (n) {}
                    }), t.appendChild(a, r), t.appendChild(n, a)
                }), n
            }, e.prototype.getFooterContainer = function () {
                var e = this,
                    n = document.createElement("div");
                n.classList.add("cc_cp_footer");
                var o = document.createElement("div");
                o.classList.add("cc_cp_f_powered_by"), o.innerHTML = t.magicTransform("Q29va2llIENvbnNlbnQgYnkgPGEgaHJlZj0iaHR0cHM6Ly93d3cudGVybXNmZWVkLmNvbS9jb29raWUtY29uc2VudC8iIHRhcmdldD0iX2JsYW5rIj5UZXJtc0ZlZWQ8L2E+");
                var i = document.createElement("div");
                i.classList.add("cc_cp_f_save");
                var a = document.createElement("button");
                return a.innerHTML = e.cookieConsent.i18n.$t("preference_center", "save"), a.addEventListener("click", function () {
                    document.dispatchEvent(e.cookieConsent.events.cc_preferencesSavePressed)
                }), t.appendChild(i, a), t.appendChild(n, o), t.appendChild(n, i), n
            }, e.prototype._getLevelCheckbox = function (e) {
                var n = this,
                    o = document.createElement("div");
                if ("strictly-necessary" !== e.id) {
                    var i = n.cookieConsent.userConsent.acceptedLevels,
                        a = document.createElement("input");
                    a.setAttribute("cookie_consent_toggler", "true"), a.setAttribute("type", "checkbox"), a.setAttribute("class", "checkbox_cookie_consent"), a.setAttribute("id", e.id), a.setAttribute("name", e.id), (r = document.createElement("label")).setAttribute("for", e.id), i[e.id] ? (a.setAttribute("checked", "checked"), r.setAttribute("class", "is-active"), r.innerHTML = n.cookieConsent.i18n.$t("dialog", "active")) : (r.setAttribute("class", "is-inactive"), r.innerHTML = n.cookieConsent.i18n.$t("dialog", "inactive")), a.addEventListener("change", function () {
                        var o = a.checked,
                            t = e.id,
                            i = document.querySelector('label[for="' + t + '"]');
                        n.cookieConsent.log("User changed toggle for cookie level [" + t + "], new status: " + o, "info"), document.dispatchEvent(n.cookieConsent.events.cc_userChangedConsent), !0 === o ? (n.cookieConsent.userConsent.acceptLevel(t), i.innerHTML = n.cookieConsent.i18n.$t("dialog", "active")) : (n.cookieConsent.userConsent.rejectLevel(t), i.innerHTML = n.cookieConsent.i18n.$t("dialog", "inactive"))
                    }), t.appendChild(o, a), t.appendChild(o, r)
                } else {
                    var r, s = document.createElement("input");
                    s.setAttribute("cookie_consent_toggler", "true"), s.setAttribute("type", "checkbox"), s.setAttribute("checked", "checked"), s.setAttribute("disabled", "disabled"), s.setAttribute("class", "checkbox_cookie_consent"), s.setAttribute("id", e.id), s.setAttribute("name", e.id), (r = document.createElement("label")).setAttribute("for", e.id), r.innerHTML = n.cookieConsent.i18n.$t("dialog", "always_active"), t.appendChild(o, s), t.appendChild(o, r)
                }
                return o
            }, e
        }(),
        S = function () {
            function e(e) {
                this.dialog = null, this.dialogOverlay = null, this.dialogExtraCss = [], this.cookieConsent = e, this.dialogExtraCss.push(e.colorPalette.getClass())
            }
            return e.prototype.initDialog = function () {
                return null === this.dialog && (this.dialog = this.createDialog()), t.appendChild("body", this.dialog, "afterbegin"), this.cookieConsent.log("Consent dialog shown", "info"), document.dispatchEvent(this.cookieConsent.events.cc_dialogShown), !0
            }, e.prototype.hideDialog = function () {
                try {
                    this.dialog.classList.add("hidden"), this.cookieConsent.log("Consent dialog hidden", "info")
                } catch (e) {}
            }, e.prototype.createDialog = function () {
                var e = document.createElement("div");
                if (e.classList.add("cc_css_reboot"), e.classList.add("cc_dialog"), this.dialogExtraCss.length)
                    for (var n = 0, o = this.dialogExtraCss; n < o.length; n++) {
                        var i = o[n];
                        e.classList.add(i)
                    }
                if (t.appendChild(e, this.createDialogContent()), "interstitial" === this.cookieConsent.userNoticeType) {
                    var a = document.createElement("div");
                    return a.classList.add("cc_overlay_lock"), t.appendChild(a, e), a
                }
                return e
            }, e.prototype.createDialogContent = function () {
                var e = this,
                    n = document.createElement("div"),
                    o = document.createElement("h1");
                o.classList.add("cc_dialog_headline"), o.innerText = e.cookieConsent.i18n.$t("dialog", "title");
                var i = document.createElement("div"),
                    a = document.createElement("p");
                a.classList.add("cc_dialog_text"), a.innerHTML = e.cookieConsent.i18n.$t("dialog", "text"), t.appendChild(i, a);
                var r = document.createElement("button");
                r.classList.add("cc_b_ok"), "express" == e.cookieConsent.userConsentType ? r.innerHTML = e.cookieConsent.i18n.$t("dialog", "i_agree_text") : r.innerHTML = e.cookieConsent.i18n.$t("dialog", "ok_text"), r.addEventListener("click", function () {
                    document.dispatchEvent(e.cookieConsent.events.cc_dialogOkPressed)
                });
                var s = document.createElement("button");
                s.classList.add("cc_b_cp"), s.classList.add("ml-1"), s.innerHTML = e.cookieConsent.i18n.$t("dialog", "change_settings"), s.addEventListener("click", function () {
                    document.dispatchEvent(e.cookieConsent.events.cc_dialogPreferencesPressed)
                });
                var c = document.createElement("div");
                return t.appendChild(c, r), t.appendChild(c, s), t.appendChild(n, o), t.appendChild(n, i), t.appendChild(n, c), n
            }, e
        }(),
        A = function (e) {
            function n(n) {
                var o = e.call(this, n) || this;
                return o.dialogExtraCss.push("simple"), o.dialogExtraCss.push("px-5"), o.dialogExtraCss.push("py-5"), o
            }
            return w(n, e), n
        }(S),
        P = function (e) {
            function n(n) {
                var o = e.call(this, n) || this;
                return o.dialogExtraCss.push("headline"), o.dialogExtraCss.push("px-5"), o.dialogExtraCss.push("py-5"), o
            }
            return w(n, e), n
        }(S),
        I = function (e) {
            function n(n) {
                var o = e.call(this, n) || this;
                return o.dialogExtraCss.push("interstitial"), o.dialogExtraCss.push("px-5"), o.dialogExtraCss.push("py-5"), o
            }
            return w(n, e), n
        }(S),
        T = function (e) {
            function n(n) {
                var o = e.call(this, n) || this;
                return o.dialogExtraCss.push("standalone"), o.dialogExtraCss.push("px-5"), o.dialogExtraCss.push("py-5"), o
            }
            return w(n, e), n
        }(S),
        O = function () {
            function e(e) {
                e.log("ConsentType main class initialized", "info")
            }
            return e.prototype.loadInitialCookies = function () {}, e
        }(),
        U = function (e) {
            function n(n) {
                var o = e.call(this, n) || this;
                return o.cookieConsent = n, o
            }
            return w(n, e), n.prototype.loadInitialCookies = function () {
                var e = this.cookieConsent.cookieLevels.cookieLevels[0].id;
                this.cookieConsent.userConsent.loadCookiesUntilAndInclude = e.toString(), this.cookieConsent.userConsent.loadCookiesUntilMaxLevel()
            }, n
        }(O),
        N = function (e) {
            function n(n) {
                var o = e.call(this, n) || this;
                return o.cookieConsent = n, o
            }
            return w(n, e), n.prototype.loadInitialCookies = function () {
                var e = this.cookieConsent.cookieLevels.cookieLevels.length,
                    n = this.cookieConsent.cookieLevels.cookieLevels[e - 1].id;
                this.cookieConsent.userConsent.loadCookiesUntilAndInclude = n.toString(), this.cookieConsent.userConsent.loadCookiesUntilMaxLevel()
            }, n
        }(O),
        D = function () {
            function e(e) {
                this.cookieConsent = e
            }
            return e.prototype.getClass = function () {
                return "light"
            }, e
        }(),
        M = function (e) {
            function n(n) {
                var o = e.call(this, n) || this;
                return o.cookieConsent = n, o
            }
            return w(n, e), n.prototype.getClass = function () {
                return "dark"
            }, n
        }(D),
        q = function (e) {
            function n(n) {
                var o = e.call(this, n) || this;
                return o.cookieConsent = n, o
            }
            return w(n, e), n.prototype.getClass = function () {
                return "light"
            }, n
        }(D),
        W = function () {
            function e(e) {
                switch (this.debug = !1, this.ownerWebsiteName = e.website_name || "", this.cookiesPolicyUrl = e.cookies_policy_url || null, this.userConsentType = e.consent_type || "express", this.userNoticeType = e.notice_banner_type || "headline", this.userColorPalette = e.palette || "light", this.ownerSiteLanguage = e.language || "en", this.userLanguageStrings = e.language_overwrite || {}, this.changePreferencesSelector = e.change_preferences_selector || null, this.isDemo = "true" == e.demo, this.debug = "true" == e.debug, this.userConsentType) {
                    default:
                    case "express":
                        this.consentType = new U(this);
                        break;
                    case "implied":
                        this.consentType = new N(this)
                }
                switch (this.userColorPalette) {
                    default:
                    case "dark":
                        this.colorPalette = new M(this);
                        break;
                    case "light":
                        this.colorPalette = new q(this)
                }
                switch (this.userNoticeType) {
                    default:
                    case "simple":
                        this.consentBanner = new A(this);
                        break;
                    case "headline":
                        this.consentBanner = new P(this);
                        break;
                    case "interstitial":
                        this.consentBanner = new I(this);
                        break;
                    case "standalone":
                        this.consentBanner = new T(this)
                }
                this.events = new C, this.eventsListeners = new x(this), this.i18n = new _(this), this.cookieLevels = new L(this), this.userConsent = new j(this), this.javascriptItems = new z(this), this.consentPreferences = new E(this), null !== this.changePreferencesSelector && this.consentPreferences.listenToUserButtonToOpenPreferences(this.changePreferencesSelector), !0 === this.userConsent.userAccepted ? (this.userConsent.loadAcceptedCookies(), !0 === this.isDemo && this.consentBanner.initDialog()) : (this.consentBanner.initDialog(), this.consentType.loadInitialCookies())
            }
            return e.prototype.log = function (e, n, o) {
                void 0 === o && (o = "log"), !0 === this.debug && ("log" === o ? console.log("[" + n + "]", e) : "table" === o && console.log("[" + n + "]", e))
            }, e
        }(),
        B = function (e) {
            return y = new W(e)
        }
}]);
