import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Report, ReportsService } from 'src/app/service/reports.service';

type ReportState = {
  reports: Report[];
  isLoading: boolean;
  filter: string;
};

const initialState: ReportState = {
  reports: [],
  isLoading: false,
  filter: 'all',
};

export const ReportStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, reportsService = inject(ReportsService)) => ({
    loadReports: async () => {
      patchState(store, { isLoading: true });

      const reports = await reportsService.loadReports();
      console.log('Reports loaded:', reports);

      patchState(store, {
        reports,
        isLoading: false,
      });
    },
  }))
);
