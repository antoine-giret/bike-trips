import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Icon } from '@chakra-ui/react';
import { Link } from 'gatsby';
import React from 'react';
import { IoBicycle } from 'react-icons/io5';

function PageBreadcrumb({
  items,
}: {
  items: Array<{ isCurrentPage?: boolean; key: string; label: string }>;
}): JSX.Element {
  return (
    <Breadcrumb as="nav" style={{ width: '100%' }}>
      <BreadcrumbItem>
        <BreadcrumbLink alignItems="center" as={Link} display="flex" gap={1} to="/">
          <Icon as={IoBicycle} boxSize={5} />
          Nos voyages à vélo
        </BreadcrumbLink>
      </BreadcrumbItem>
      {items.map(({ key, isCurrentPage, label }) =>
        isCurrentPage ? (
          <BreadcrumbItem isCurrentPage key={key}>
            <BreadcrumbLink>{label}</BreadcrumbLink>
          </BreadcrumbItem>
        ) : (
          <BreadcrumbItem key={key}>
            <BreadcrumbLink as="span">{label}</BreadcrumbLink>
          </BreadcrumbItem>
        ),
      )}
    </Breadcrumb>
  );
}

export default PageBreadcrumb;
