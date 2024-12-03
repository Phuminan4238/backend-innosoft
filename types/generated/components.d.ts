import type { Schema, Attribute } from '@strapi/strapi';

export interface TagCategoryTag extends Schema.Component {
  collectionName: 'components_tag_category_tags';
  info: {
    displayName: 'Tag';
  };
  attributes: {
    tag: Attribute.Enumeration<
      [
        'Support KMUTT\u2019s organization projects (\u0E07\u0E32\u0E19\u0E20\u0E32\u0E22\u0E43\u0E19)',
        'Consultant & Outsource projects (\u0E07\u0E32\u0E19\u0E20\u0E32\u0E22\u0E19\u0E2D\u0E01)'
      ]
    >;
  };
}

export interface ProjectProjectCard extends Schema.Component {
  collectionName: 'components_project_project_cards';
  info: {
    displayName: 'ProjectCard';
    description: '';
  };
  attributes: {
    header: Attribute.String;
    paragraph: Attribute.Text;
    uploadfiles: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'tag-category.tag': TagCategoryTag;
      'project.project-card': ProjectProjectCard;
    }
  }
}
