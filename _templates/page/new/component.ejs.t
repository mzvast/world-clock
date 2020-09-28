---
to: src/pages/<%= h.changeCase.paramCase(title)%>/<%= title%>.tsx
---
/**
 * @file [<%= title%>]
 * @author []
 * @email []
 * @create date <%= h.getDate() %>
 */
/* eslint-disable max-len,babel/new-cap,operator-linebreak,fecs-export-on-declare,space-before-function-paren */
import React, {PureComponent} from 'react';
type Props = {};
type State = {};
class <%= title%> extends PureComponent<Props, State> {
    // state: State;

    static defaultProps = {};

    render() {
        return <div><%= title%></div>;
    }
}
export default <%= title%>;