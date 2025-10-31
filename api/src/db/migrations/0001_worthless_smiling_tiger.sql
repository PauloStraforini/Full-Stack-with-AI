ALTER TABLE "webhooks" ALTER COLUMN "query_params" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "webhooks" ADD COLUMN "headers" jsonb NOT NULL;