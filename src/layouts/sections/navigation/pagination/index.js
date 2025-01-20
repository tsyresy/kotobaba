// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";

function Pagination() {
  return (
    <BaseLayout
      title="Pagination"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/navigation/pagination" },
        { label: "Pagination" },
      ]}
    >
      <p> Test </p>
    </BaseLayout>
  );
}

export default Pagination;
