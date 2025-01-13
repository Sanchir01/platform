-- AlterTable
ALTER TABLE "Lessons" ADD COLUMN     "subCourseId" INTEGER;

-- AlterTable
ALTER TABLE "SubCourse" ADD COLUMN     "courseId" INTEGER;

-- AddForeignKey
ALTER TABLE "SubCourse" ADD CONSTRAINT "SubCourse_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lessons" ADD CONSTRAINT "Lessons_subCourseId_fkey" FOREIGN KEY ("subCourseId") REFERENCES "SubCourse"("id") ON DELETE SET NULL ON UPDATE CASCADE;
