import vine from '@vinejs/vine';
import {Infer} from '@vinejs/vine/types';

/* -------------------------------------------------------------------------- */
/*                                  Schemas                                   */
/* -------------------------------------------------------------------------- */

// base link schema
const baseLinkSchema = vine.object({
  href: vine.string(),
  method: vine.string(),
});

// links for any simple resource from api
const linksSchema = vine.object({
  self: baseLinkSchema.clone(),
  update: baseLinkSchema.clone(),
  delete: baseLinkSchema.clone(),
});

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

// type for simple resource links
export type Links = Infer<typeof linksSchema>;

/* -------------------------------------------------------------------------- */
/*                                 Validators                                 */
/* -------------------------------------------------------------------------- */

// validator links schema
export const linksValidator = vine.compile(linksSchema);