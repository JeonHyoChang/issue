import PageLayout from '@components/common/layout/PageLayout';
import DetailHeader from '@components/issueDetail/detailHeader';
import DetailContent from '@components/issueDetail/detailContent';

const IssueDetail = () => {
  return (
    <PageLayout>
      <DetailHeader />
      <DetailContent />
    </PageLayout>
  );
};

export default IssueDetail;
