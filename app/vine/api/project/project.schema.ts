import vine from '@vinejs/vine';
import {Infer} from '@vinejs/vine/types';
import {linksForProjectSchema, technologyProjectAssociationLinksSchema} from '@schemas/api/links/links.schema';
import {textForOthersSchema, textUpsertSchema} from '@schemas/api/text/text.schema';
import {technologyForOthersSchema} from '@schemas/api/technology/technology.schema';

/* -------------------------------------------------------------------------- */
/*                                  Schemas                                   */
/* -------------------------------------------------------------------------- */

// base for other project schemas
const baseProjectSchema = vine.object({
  gif: vine.string(),
  github: vine.string(),
  live_version: vine.string(),
  name: vine.string(),
});

// project returned by api
const projectFromApiSchema = vine.object({
  ...baseProjectSchema.getProperties(),
  description_id: vine.number(),
  id: vine.number(),
  links: linksForProjectSchema.clone(),
});

// complete project returned by api
const completeProjectFromApiSchema = vine.object({
  ...baseProjectSchema.getProperties(),
  description: textForOthersSchema.clone(),
  id: vine.number(),
  technologies: vine.array(technologyForOthersSchema.clone()),
  links: linksForProjectSchema.clone(),
});

// project for creation or update
const projectUpsertSchema = vine.object({
  ...baseProjectSchema.getProperties(),
  description: textUpsertSchema.clone(),
});

// project when deleted
const projectWhenDeletedSchema = vine.object({
  ...baseProjectSchema.getProperties(),
  description_id: vine.number(),
  id: vine.number(),
});

// association between a technology and a project returned by api
const projectTechnologyAssociationSchema = vine.object({
  project_id: vine.number(),
  technology_id: vine.number(),
  links: technologyProjectAssociationLinksSchema.clone(),
});

// project returned by database
const projectFromDatabaseSchema = vine.object({
  ...baseProjectSchema.getProperties(),
  description_id: vine.number(),
  id: vine.number(),
});

// complete project returned by database
const completeProjectFromDatabaseSchema = vine.object({
  ...baseProjectSchema.getProperties(),
  description_id: vine.number(),
  id: vine.number(),
  description: textForOthersSchema.clone(),
  Project_Technologies: vine.array(
    vine.object({
      project_id: vine.number(),
      technology_id: vine.number(),
      technology: vine.object({
        id: vine.number(),
        name: vine.string(),
        description_id: vine.number(),
        logo: vine.string(),
        color: vine.string(),
        category_id: vine.number(),
      }),
    }),
  ),
});

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

// type for project returned by api
export type ProjectFromApi = Infer<typeof projectFromApiSchema>;

// type for complete category returned by api
export type CompleteProjectFromApi = Infer<typeof completeProjectFromApiSchema>;

// type for category for creation or update
export type ProjectUpsert = Infer<typeof projectUpsertSchema>;

// type for category when deleted
export type ProjectWhenDeleted = Infer<typeof projectWhenDeletedSchema>;

// type for association between a technology and a project returned by api
export type ProjectTechnologyAssociation = Infer<typeof projectTechnologyAssociationSchema>;

// type for project returned by database
export type ProjectFromDatabase = Infer<typeof projectFromDatabaseSchema>;

// type for complete project returned by database
export type CompleteProjectFromDatabase = Infer<typeof completeProjectFromDatabaseSchema>;

/* -------------------------------------------------------------------------- */
/*                                 Validators                                 */
/* -------------------------------------------------------------------------- */

// validator for project returned by api
export const projectFromApiValidator = vine.compile(projectFromApiSchema);

// validator for complete category returned by api
export const completeProjectFromApiValidator = vine.compile(completeProjectFromApiSchema);

// validator for category for creation or update
export const projectUpsertValidator = vine.compile(projectUpsertSchema);

// validator for category when deleted
export const projectWhenDeletedValidator = vine.compile(projectWhenDeletedSchema);

// validator for association between a technology and a project returned by api
export const projectTechnologyAssociationValidator = vine.compile(projectTechnologyAssociationSchema);
