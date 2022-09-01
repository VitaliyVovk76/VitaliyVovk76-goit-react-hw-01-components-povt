import Container from './Container/Container';
import Profile from './Profile/Profile';
import user from './Profile/user.json';
import Statistics from './Statistics/Statistics';
import statisticsData from './Statistics/data.json';
import friendsArr from '../components/Frends/friends.json';
import FriendList from './Frends/FriendList';
import TransactionHistory from './Transactions/TransactionHistory/TransactionHistory';
import transactionsList from './Transactions/transactions.json';
import Title from './Title/Title';
import Section from './Section/Section';

export const App = () => {
  return (
    <div>
      <Section>
        <Container>
          <Title title="Profile" />
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        </Container>
      </Section>
      <Section>
        <Container>
          <Title title="Statistics" />
          <Statistics stats={statisticsData} title="hello" />
        </Container>
      </Section>
      <Section>
        <Container>
          <Title title="Friends List" />
          <FriendList friends={friendsArr} />
        </Container>
      </Section>
      <Section>
        <Container>
          <Title title="TransactionHistory" />
          <TransactionHistory transactions={transactionsList} />
        </Container>
      </Section>
    </div>
  );
};
