import { useQuery } from "graphql-hooks";

const HOMEPAGE_QUERY = `query {
    countryResolver {
      name,
      code,
      iso3,
      dialCode,
      defaultTimezone,
      otpInAppEnabled
    }
  }
  `;

export default function CountriesComponent(): React.ReactElement {
  const { loading, error, data } = useQuery(HOMEPAGE_QUERY);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something Bad Happened</div>;
  console.log(data.countryResolver);
  return (
    <ul className="country__items">
      {data.countryResolver.map(
        (
          { name, code, iso3, otpInAppEnabled, defaultTimezone }: any,
          index: number
        ) => (
          <li key={index}>
            <div className="country__row">
              <span
                className="bar"
                style={{ background: otpInAppEnabled ? "#00ad09" : "#ff0000" }}
              ></span>
              <span className="flag__icon">
                <img
                  alt="country flag"
                  src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${code}.svg`}
                />
              </span>
              <div className="row__content">
                <div className="row__group">
                  <span>{name}</span>
                  <span>Timezone {defaultTimezone}</span>
                </div>
                <div className="country__code">
                  Country code:<span>({iso3})</span>
                </div>
              </div>
              <div className={otpInAppEnabled ? "valid" : "not__valid"}></div>
            </div>
          </li>
        )
      )}
    </ul>
  );
}
