import type { Schema, Struct } from '@strapi/strapi';

export interface SharedCurriculum extends Struct.ComponentSchema {
  collectionName: 'components_shared_curricula';
  info: {
    description: '';
    displayName: 'curriculum';
    icon: 'arrowRight';
  };
  attributes: {
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'files' | 'videos', true>;
  };
}

export interface SharedCurriculumSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_curriculum_sections';
  info: {
    description: '';
    displayName: 'curriculum_section';
  };
  attributes: {
    lessons: Schema.Attribute.Component<'shared.lesson', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedLesson extends Struct.ComponentSchema {
  collectionName: 'components_shared_lessons';
  info: {
    description: '';
    displayName: 'lesson';
  };
  attributes: {
    duration: Schema.Attribute.String;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'files' | 'videos', true>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedReviews extends Struct.ComponentSchema {
  collectionName: 'components_shared_reviews';
  info: {
    description: '';
    displayName: 'reviews';
    icon: 'user';
  };
  attributes: {};
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_socials';
  info: {
    displayName: 'social';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.curriculum': SharedCurriculum;
      'shared.curriculum-section': SharedCurriculumSection;
      'shared.lesson': SharedLesson;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.reviews': SharedReviews;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.social': SharedSocial;
    }
  }
}
