import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
// import MokuMoku from '../../image/mokumoku.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="mokumoku" src={MokuMoku}/>
        </ListItemAvatar>
        <ListItemText
          primary="もくもく会"
          secondary={
            <React.Fragment>
            {"#2 コムニックもくもく会【2020/08/09(Sun)】社内研修やってみよう！"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="mokumoku" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="もぐもぐ会"
          secondary={
            <React.Fragment>
            {"晩酌のツマミに、最近ハマってる山崎製パンの塩バターフランスパンにチーズをパイルダーオン！（年寄しか知らないか？）"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="mokumoku" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="もくもく会"
          secondary={
            <React.Fragment>
            {"#2 コムニックもくもく会【2020/08/09(Sun)】社内研修やってみよう！"}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
