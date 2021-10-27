import { useStaticQuery, graphql } from 'gatsby';
import { uniqAndSort } from '../common/utils';

const useAllCollections = () => {
  const { allCollectionJson } = useStaticQuery(
    graphql`
      query AllCollections {
        allCollectionJson {
          nodes {
            id
            company
            department
            work
            city
            startWork
            endWork
            lunchTime
            dinnerTime
            Wed
            Fri
            workDays
            report
            note
            industry
            suggest
            personForm
            otherWelfare
            isForeignEnterprise
          }
        }
      }
    `
  );

  const collections = allCollectionJson.nodes;
  const { company, city, work } = collections.reduce(
    (prev, next) => {
      return {
        company: [...prev.company, next.company.trim()],
        city: [...prev.city, next.city.trim()],
        work: [...prev.work, next.work.trim()],
      };
    },
    { company: [], city: [], work: [] }
  );

  const companies = uniqAndSort(company);
  const cities = uniqAndSort(city);
  const works = uniqAndSort(work);

  return {
    collections,
    companies,
    cities,
    works,
  };
};

export { useAllCollections };
