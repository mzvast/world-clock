---
to: src/components/<%= h.changeCase.paramCase(title)%>/<%= title%>.tsx
---
/**
 * @file [<%= title%>]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date <%= h.getDate() %>
 */
import React from 'react';
import styles from './<%= title%>.module.less';

type Props = {};
const <%= title%>:React.FC<Props> = ()=> {
    return (
        <div><%= title%></div>
    )
}
export default <%= title%>;