import { Avatar, List, Skeleton } from "antd";
import React from "react";
import Container from "../../components/Container";

interface TeamData {
  name: string;
  abbreviation: string;
  color: string;
}

const Dynamic: React.FC = () => {
  const [isReady, setIsReady] = React.useState(false)
  const [isError, setIsError] = React.useState(false)
  const [mlbTeamData, setMlbTeamData] = React.useState<TeamData[]>([])

  const skeletonData = Array.from({ length: 5 }).map(() => ({
    name: '', abbreviation: '', color: '',
  }));

  React.useEffect(() => {
    const baseUrl = 'https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/teams';
    const queryParams = new URLSearchParams({ 'test': 'abc' });
    const url = `${baseUrl}?${queryParams}`
    fetch(url,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
      },
    )
      .then(response => response.json())
      .then(result => {
        const teams = result.sports[0].leagues[0].teams
        const newMlbTeamData: TeamData[] = teams.map((x: any) => ({
          name: x.team.displayName,
          abbreviation: x.team.abbreviation,
          color: x.team.color,
        }))

        // display after 2 seconds
        setTimeout(() => {
          setMlbTeamData(newMlbTeamData)
          setIsReady(true)
        }, 2000)
      })
      .catch(error => {
        console.warn(error)
        setIsError(true)
      })
  }, []) // must include empty array

  return (
    <>
      <Container size={16} centered >
        <h2>Example API Call</h2>
      </Container>

      <Container size={16} centered >
        <h4>MLB Teams</h4>
      </Container>

      {isError ? (
        <Container centered >
          <div>There was an error calling the API</div>
        </Container>
      ) : (
        <Container>
          <List
            itemLayout="horizontal"
            size="small"
            dataSource={isReady ? mlbTeamData : skeletonData}
            renderItem={item => (
              <List.Item>
                <Skeleton avatar title={false} loading={!isReady} active>
                  <List.Item.Meta
                    avatar={
                      <Avatar style={{ backgroundColor: `#${item.color}` }}>
                        {item.abbreviation}
                      </Avatar>
                    }
                    title={item.name}
                  />
                </Skeleton>
              </List.Item>
            )}
          />
        </Container>
      )}

    </ >
  )
}

export default Dynamic
