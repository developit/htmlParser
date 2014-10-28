/** Renders browser DOM using some other DOM.
 *  @namespace
 */
var htmlRenderer = /** @lends htmlRenderer. */ {

    /** Render a DOM Node or document into a node.
     *  @param n      A Node or Document
     *  @param into   A node to append the constructed elements to
     *  @returns {HTMLElement}
     */
    render : function node(n, into, options) {
        var i, d;
        options = options || {};
        if (!n) return false;
        if (Object.prototype.toString.call(n)==='[object Array]') {
            for (i=0; i<n.length; i++) {
                node(n[i], into, options);
            }
        }
        else if (n.nodeName==='#document') {
            node(n.childNodes, into, options);
        }
        else {
            if (n.nodeType===3) {
                d = document.createTextNode(n.textContent);
            }
            else if (n.nodeType===4) {
                d = document.createComment(' <![CDATA['+n.textContent+']]> ');
            }
            else if (n.nodeType===8) {
                d = document.createComment(n.textContent);
            }
            else {
                if (options.blacklist && options.blacklist.indexOf(n.nodeName)>-1) {
                    return false;
                }
                if (options.whitelist && options.whitelist.indexOf(n.nodeName)===-1) {
                    return false;
                }
                d = (options.document || document).createElement(n.nodeName);
                for (i in n.attributes) {
                    if (n.attributes.hasOwnProperty(i)) {
                        d.setAttribute(i, n.attributes[i]);
                    }
                }
                if (n.childNodes && n.childNodes.length>0) {
                    node(n.childNodes, d, options);
                }
                else {
                    d.innerHTML = n.innerHTML;
                }
            }
            into.appendChild(d);
        }
        return d;
    }
};
