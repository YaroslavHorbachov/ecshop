import { Grid } from '@material-ui/core';
import { Close, Menu, Person, Search, ShoppingCart } from '@material-ui/icons';
import * as React from 'react';
import { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AppNavigationEnum } from '../app.navigation';
import history from '../history';
import { headerRoutes } from './header.constants';

export interface IAppHeaderProps extends RouteComponentProps<{}> {}

class AppHeader extends Component<IAppHeaderProps> {
  public hanldeCloseRoute = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
  ) => {
    e.preventDefault();
    history.push(AppNavigationEnum.Home);
  }

  public renderRotueIcon = (to: AppNavigationEnum) => {
    const { pathname } = this.props.location;

    switch (to) {
      case pathname: {
        return <Close onClick={this.hanldeCloseRoute} />;
      }
      case AppNavigationEnum.Menu: {
        return <Menu />;
      }
      case AppNavigationEnum.Search: {
        return <Search />;
      }
      case AppNavigationEnum.Login: {
        return <Person />;
      }
      case AppNavigationEnum.Cart: {
        return <ShoppingCart />;
      }
    }
  }

  public render() {
    return (
      <Grid container>
        {headerRoutes.map(({ label, to }) => (
          <Grid item xs={3} xl={3} key={`${label}-${to}`}>
            <Link to={to}>
              {this.renderRotueIcon(to)}
              {label}
            </Link>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default withRouter<IAppHeaderProps>(AppHeader);
